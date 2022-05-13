const User = require("../../models/user")
const Message = require("../../models/message")
const Conversation = require("../../models/conversation")
const bcryptjs = require('bcryptjs')
const createToken = require("../../helpers/createToken")

const UserResolvers = {
    Query: {
        hello: () => 'world',
        getUsers: async (_, { input }, ctx) => {
            try {
                const users = await User.find({ _id: { $ne: ctx.onlyuser._id } })
                return users

            } catch (error) {
                console.log(error)
            }
        },
        getMyConversations: async (_, { input }, ctx) => {    
            try {

                const conversations = await Conversation.find({ members: ctx.onlyuser._id }).populate({ path: 'members', select: 'name lastName email' }).sort( { createdAt: 1 } )
                
                const ids = conversations.map(conversation => conversation._id.toString())

                const messages = await Message.find({conversation: { $in: ids }}).populate({ path: 'conversation', populate: { path: 'members',  match: { _id: {$ne: ctx.onlyuser._id} } } })
                .populate({ path: 'sender', select: 'name lastName email' })
                console.log(messages)
                const cleanData = [
                    ...new Map(messages.map((item) => [item.conversation._id, item])).values(),
                ]

                return cleanData
            } catch (error) {
                console.log(error)
            }
        },
        getMyMessage: async (_, { input }, ctx) => {
            try {
                if(input.idConversation !== ""){
                    const messages = await Message.find({ conversation: input.idConversation }).select({"message": 1, "createdAt":1, "sender":1}).sort({ createdAt: 1 })
                    return messages
                }

                return []
                    
            } catch (error) {
                console.log(error)
            }
        },
        authMe: async (_, { input }, ctx) => {
            try {
                const user = await User.findById(ctx.onlyuser._id)
                return user
            } catch (error) {
                console.log(error)
            }
        },
        isAlreadyConversation: async (_, { user }, ctx) => {
            try {
                const conversation = await Conversation.findOne({ members: { $all: [ctx.onlyuser._id, user] } })
                if(conversation){
                    return conversation._id
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation: {
        newUser: async (_, { input }) => {
            const { email, password } = input
            const user = await User.findOne({ email })
            if (user) {
                throw new Error("user is already")
            }
            const salt = await bcryptjs.genSalt(10)
            input.password = await bcryptjs.hash(password, salt)

            const newUser = new User(input)
            try {
                newUser.save()
                return newUser
            } catch (error) {
                console.log(error)
            }
        },
        Login: async (_, { input }) => {
            const { email, password } = input

            const userExists = await User.findOne({ email })

            if (!userExists) {
                throw new Error("User does not exist")
            }

            const correctPassword = await bcryptjs.compare(password, userExists.password)

            if (!correctPassword) {
                throw new Error("the password is incorrect")
            }

            const token = createToken(userExists, "24h")

            return { token }
        },
        newConversation: async (_, { input }, ctx) => {
            const members = [input.user, ctx.onlyuser._id]

            try {
                const newConversation = new Conversation({ members })
                await newConversation.save()

            } catch (error) {
                console.log(error)
            }
        },
        newMessage: async (_, { input }, ctx) => {
            const conversation = await Conversation.find({ members: { $all: [ctx.onlyuser._id, input.userId] } })
            if (conversation.length === 0) {
                console.log("no conversation")
                try {
                    const newConversation = new Conversation({ members: [ctx.onlyuser._id, input.userId] })
                    const conversation = await newConversation.save()
                    const newMessage = new Message({ message: input.message, sender: ctx.onlyuser._id, conversation: conversation._id })
                    const messageSaved =await newMessage.save()
                    console.log("message saved", messageSaved)
                    return messageSaved
                } catch (error) {
                    console.log(error)
                }
            }
            const newMessage = new Message({ message: input.message, sender: ctx.onlyuser._id, conversation: conversation[0]._id })
            try {
                const messageSaved = await newMessage.save()
                console.log("message saved", messageSaved)
                return messageSaved
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = UserResolvers