// const express = require('express');
// // import Apollo Server
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');

// // import typedefs and resolvers
// const { typeDefs, resolvers } = require('./schema');
// const db = require('./config/connection');
// const { authMiddleware } = require('./utils/auth');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // create a new Apollo and pass in the schema data
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware
// });

// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });


// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`\n ----------- 🚀 API server running on port ${PORT}! -----------`);
//     // log where we can go to test our GQL API
//     console.log(`\n ----------- Use GraphQL at http://localhost:${PORT}${server.graphqlPath} ----------`);
//   });
// });
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");

const app = express();

const typeDefs = `
    type Query{
        totalPosts: Int!
    }
`;
const resolvers = {
    Query: {
        totalPosts: () => 100,
    },
};
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.listen(4000, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is ${apolloServer.graphqlPath}`);
});