const User = require("../../models/user")

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

            try {
                
                const newuser = new User(input)
                newuser.save()
                return newuser
            } catch (error) {
                console.log(error)
            }
            
        }
    }

}

module.exports = UserResolvers