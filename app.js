const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
const mongoose = require("mongoose");

// mount the express graphql as route handler
// use get or post to show it in the graphiql in the browser

let connectionUrl =
  "mongodb+srv://mongotest:junip123@cluster0-nqahq.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("connection successful");
    },
    err => {
      console.log("--ERROR IN THE CONECTION-", err);
    }
  );

/*
 * without the schema in the graphiql browser it will show error that the graphql middle ware
 * needs the graphql middleware.
 */
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
app.listen(4000);
