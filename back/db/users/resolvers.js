const User = require("../../models/user")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
            console.log(user)
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
        }
    }
}

module.exports = UserResolvers