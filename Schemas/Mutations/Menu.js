// const { UserType } = require('../TypeDefs/User')

const graphql = require("graphql");
// const { GenerateToken } = require("../../Authentication/Authentication")
 const { menu } = require("../../models")

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} = graphql;


const updateMenuReturn = new GraphQLObjectType({
  name: "updateMenuReturn",
  fields: ({
    message: { type: GraphQLString },
    
  })
})


const menu_inputobj = new GraphQLInputObjectType({
  name: "menuInput",
  fields: ({


    item: { type: GraphQLString },
    type: { type: GraphQLString },
    price:{type: GraphQLString}

  })
})

const UPDATE_MENU = {
  type: updateMenuReturn,
  args: {
    menuInput: { type: menu_inputobj }
  },
  resolve: async (parents, args) => {
    let token

    try {
      // console.log(args.userInput.user_id, args.userInput.password)
      let item = args.menuInput.item
      let type = args.menuInput.type
      let price = args.menuInput.price

      await menu.create({ item, type,price})
        .then(() => {
          console.log('this is th New item inserted ')
      


        })
        return {message:'args'}
      
    } catch (err) {
      console.log(err)

    }


    return { user_id: args.userInput.user_id, token: token }


  }
}


module.exports = { UPDATE_MENU }