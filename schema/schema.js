const graphql = require("graphql");
//const _ = require('loadash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

// defining the book object with the expected fieids and its type

// for the instacne defining consts

const books = [
  { name: "the name of the wind", genre: "Fantasy", id: "1" },
  { name: "The long earth", genre: "Fantasy", id: "2" },
  { name: "Rich dad and poor dad", genre: "Sci-Fi", id: "3" }
];

const authors = [
  {
    name: "Patrik",
    age: 22,
    id: 1
  },
  {
    name: "Brandan",
    age: 24,
    id: 2
  },
  {
    name: "Tony",
    age: 26,
    id: 3
  }
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get the data from the database or other resoureces
        return books[0];
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors[0];
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
