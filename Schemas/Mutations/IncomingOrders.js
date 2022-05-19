// const { UserType } = require('../TypeDefs/User')

const graphql = require("graphql");
// const { GenerateToken } = require("../../Authentication/Authentication")
  const { incoming_order } = require("../../models")
const {incomingOrderReturn,incomingOrder_inputobj} = require("../TypeDefs/IncomingOrders")
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} = graphql;



const INCOMING_ORDER = {
  type: incomingOrderReturn,
  args: {
    incomingOrderInput: { type: incomingOrder_inputobj }
  },
  resolve: async (parents, args) => {


    try {
    //   console.log(args.userInput.user_id, args.userInput.password)
      let name = args.incomingOrderInput.name
      let items = args.incomingOrderInput.items
      let status='false'
      let total = args.incomingOrderInput.total

      await incoming_order.create({ name, items, total,status })
        .then(() => {
          console.log('this is th New item inserted ')
      


        })

        return {message:'success'}
      
    } catch (err) {
      console.log(err)

    }





  }
}


module.exports = { INCOMING_ORDER }