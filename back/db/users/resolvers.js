const User = require("../../models/user")
const bcryptjs = require('bcryptjs')
const createToken = require("../../helpers/createToken")

const UserResolvers = {
    Query:{
        hello: () => 'world',
        getUsers: async () => {
            try {
                const users = await User.find()
                return users
                
            } catch (error) {
                console.log(error)
            }
        }
    },
    Mutation:{
        newUser: async (_, {input}) =>{
            const { email, password } = input
            const user = await User.findOne({ email})
            if(user){
                throw new Error("user is already")
            }
            const salt = await bcryptjs.genSalt(10)
            input.password = await bcryptjs.hash(password, salt)

            const newuser = new User(input)
            try {
                newuser.save()
                return newuser
            } catch (error) {
                console.log(error)
            }
        },
        Login: async (_, {input}) => {
            const { email, password } = input

            const userExists = await User.findOne({email})

            if(!userExists){
                throw new Error("User does not exist")
            }

            const correctPassword = await bcryptjs.compare(password, userExists.password)

            if(!correctPassword){
                throw new Error("the password is incorrect")
            }

            const token = createToken(userExists, "24h")

            return {token}
        }
    }
}

module.exports = UserResolvers