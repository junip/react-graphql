const graphql = require('graphql');
//const _ = require('loadash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

// defining the book object with the expected fieids and its type

// for the instacne defining consts

const books = [
    {name: 'the name of the wind', genre: 'Fantasy', id: "1"},
    {name: 'The long earth', genre: 'Fantasy', id: "2"},
    {name: 'Rich dad and poor dad', genre: 'Sci-Fi', id: "3"}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=> ({
        id: {type: GraphQLString },
        name: {type: GraphQLString },
        genre: {type: GraphQLString } 
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args){
                // code to get the data from the database or other resoureces
               return  books[0]            
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})