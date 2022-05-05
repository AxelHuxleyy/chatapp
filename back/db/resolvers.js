const UserResolvers = require("./users/resolvers")
const ConversationResolvers = require("./conversations/resolvers")

const resolvers = {
    ...UserResolvers
  };

module.exports= resolvers