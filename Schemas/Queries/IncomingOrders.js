const {returnIncomingOrder,exitFromFlow_input} =require('../TypeDefs/index')
const graphql = require("graphql");
const { incoming_order } = require("../../models");
// const { user } = require('pg/lib/defaults');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
GraphQLString,
  GraphQLList,
} = graphql;





 const returnOrderList = new GraphQLObjectType({
   name:"returnOrderList",
   fields:({
    orderList : {type : new GraphQLList(returnIncomingOrder)},
    error :{type:GraphQLString}
   })
  
})

 const EXIT_FROM_FLOW ={
    type: returnOrderList,
    args: {
        exitFromFlowId: { type: exitFromFlow_input }
      },
    resolve: async(parent, args)=> {


    try{
        let incomingOrderResult=[]
   console.log("this is the args-------->",args.exitFromFlowId)
     await incoming_order.findOne({ where: { id: args.exitFromFlowId.id }} )
      .then(async(record)=>{
        if (record) {
            record.status = "true";
          
            await record.save();
          } 
         incomingOrderResult= await incoming_order.findAll({
            attributes: ['id', 'name','items', 'total','status'],
            order: [['updatedAt', 'DESC']]
            
          });

          
      })
     
      return {orderList: incomingOrderResult , error: null}
  
//   for(let i=0;i<result.length;i++){
//     menu_arr.push(result[i]) 
//   }
//   console.log( 'this is the result of the menu ',result)
       
  
   
    }catch(err){
      console.log(err)
    }

    }}

    const GET_INCOMING_ORDERS ={
        type: returnOrderList,
        resolve: async()=> {
    
    
        try{
           const menu_arr =[]
          const incomingOrderResult= await incoming_order.findAll({
            attributes: ['id', 'name','items', 'total','status'],
            order: [['updatedAt', 'DESC']]
            
          });
         
      
    //   for(let i=0;i<result.length;i++){
    //     menu_arr.push(result[i]) 
    //   }
    //   console.log( 'this is the result of the menu ',result)
           return {orderList: incomingOrderResult , error: null}
      
       
        }catch(err){
          console.log(err)
        }
    
        }}
    
module.exports={GET_INCOMING_ORDERS,EXIT_FROM_FLOW}