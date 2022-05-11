const {MenuType} =require('../TypeDefs/User')
const graphql = require("graphql");
const { menu } = require("../../models");
// const { user } = require('pg/lib/defaults');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
} = graphql;





 const returnMenu = new GraphQLObjectType({
   name:"returnMenuList",
   fields:({
    menuList : {type : new GraphQLList(MenuType)},
    error :{type:GraphQLString}
   })
  
})

 const GET_MENU ={
    type: returnMenu,
    resolve: async()=> {


    try{
       const menu_arr =[]
      const result= await menu.findAll({
        attributes: ['id', 'item','type', 'price']
      });
     
  
  for(let i=0;i<result.length;i++){
    menu_arr.push(result[i]) 
  }
  console.log( 'this is the result of the menu ',menu_arr)
       return {menuList: menu_arr , error: null}
  
   
    }catch(err){
      console.log(err)
    }

    }}


module.exports={GET_MENU}