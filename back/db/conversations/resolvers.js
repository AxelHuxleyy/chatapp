
const ConversationResolvers = {
    Query:{
        hello: () => 'world from conversations',
        
    },
    Mutation:{
      newConversation: (_, {input})=> {
        
      }
    }
}

module.exports = ConversationResolvers