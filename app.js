const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const mongoose = require("mongoose");

// mount the express graphql as route handler
// use get or post to show it in the graphiql in the browser

let connectionUrl =
  "mongodb+srv://mongotest:password@cluster0-nqahq.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(connectionUrl).then(
  () => {
    console.log("DB CONNECTED ");
  },
  err => {
    console.log("Connection Unsuccessfull");
  }
);
/*
 * without the schema in the graphiql browser it will show error that the graphql middle ware
 * needs the graphql middleware.
 */
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
app.listen(4000);
