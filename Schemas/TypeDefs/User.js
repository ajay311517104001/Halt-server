const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
  
} = graphql;



 const MenuType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLInt },
      item: { type: GraphQLString },
      type: {type :GraphQLString},
      price: {type :GraphQLString},
    
     
    }),
  });



module.exports= {MenuType};

