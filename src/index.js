const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const app = express();

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/todoapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

// Create Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// Apply middleware
async function startServer(){
    await server.start();
    server.applyMiddleware({ app });

    // Start the server
    app.listen({ port: 4000 }, () =>{
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    });
}

startServer();