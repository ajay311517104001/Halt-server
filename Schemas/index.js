// const {UserType} =require('./TypeDefs/User')
// const {client} = require("../dbmanager")
const graphql = require("graphql");
const { GET_MENU,GET_INCOMING_ORDERS,EXIT_FROM_FLOW} =require("./Queries");
const { UPDATE_MENU , INCOMING_ORDER} = require('./Mutations/index')

// const { UPDATE } = require("sequelize/types/query-types");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
} = graphql;

// client.connect();



const RootQuery = new GraphQLObjectType({
name:"RootQueryType",
fields:{
    getMenu:GET_MENU,
    getIncomingOrders:GET_INCOMING_ORDERS,
    exitFromFlow: EXIT_FROM_FLOW

}});

const RootMutation =new GraphQLObjectType({
  name:"RootMutationType",
  
  fields:{
    updateMenu: UPDATE_MENU,
     incomingOrder: INCOMING_ORDER,

  }
})



module.exports = new GraphQLSchema({ query: RootQuery , mutation: RootMutation });