// Import the mergeResolvers function from the @graphql-tools/merge package
const { mergeResolvers } = require('@graphql-tools/merge');

// Import the todoResolver module which contains the resolver functions for the Todo schema
const todoResolver = require('./todoResolver');

// Merge the imported resolvers into a single resolver object
const resolvers = mergeResolvers([todoResolver]);

// Export the merged resolvers so they can be used in the Apollo Server setup
module.exports = resolvers;