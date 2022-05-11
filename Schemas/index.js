// const {UserType} =require('./TypeDefs/User')
// const {client} = require("../dbmanager")
const graphql = require("graphql");
const { GET_MENU} =require("./Queries/Menu");
const { UPDATE_MENU } = require('./Mutations/Menu');
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
    getMenu:GET_MENU
}});

const RootMutation =new GraphQLObjectType({
  name:"RootMutationType",
  
  fields:{
    updateMenu: UPDATE_MENU,


  }
})



module.exports = new GraphQLSchema({ query: RootQuery , mutation: RootMutation });