const graphql = require("graphql")

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
  GraphQLString,
    GraphQLList,
    GraphQLInputObjectType
    
  } = graphql;

// ----------------------------- MUTATIONS ------------------------------------------
  const incomingOrderReturn = new GraphQLObjectType({
    name: "incomingOrderReturn",
    fields: ({
      message: { type: GraphQLString },
      
    })
  })
  
  const incomingOderItem = new GraphQLInputObjectType({
      name: "incomingOderItem",
      fields: ({
        item_name: { type: GraphQLString },
        count: { type: GraphQLString },
        
      })
    })
  
  const incomingOrder_inputobj = new GraphQLInputObjectType({
    name: "incomingOrderInput",
    fields: ({
  
  
      name: { type: GraphQLString },
      items: {type : new GraphQLList(incomingOderItem)},
      total:{type: GraphQLString}
  
    })
  })

  // ----------------------------- QUERIES ------------------------------------------


  const returnOderItem = new GraphQLObjectType({
    name: "returnOderItem",
    fields: ({
      item_name: { type: GraphQLString },
      count: { type: GraphQLString },
      
    })
  })


  const returnIncomingOrder = new GraphQLObjectType({
    name: "returnIncomingOrder",
    fields: ({
  
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      items: {type : new GraphQLList(returnOderItem)},
      total:{type: GraphQLString},
      status:{type: GraphQLString}
  
    })
  })


  module.exports= {incomingOrderReturn,incomingOrder_inputobj,incomingOderItem,returnOderItem,returnIncomingOrder};
