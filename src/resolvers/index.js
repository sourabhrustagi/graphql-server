// /src/resolvers/index.js
const { mergeResolvers } = require('@graphql-tools/merge');
const todoResolver = require('./todoResolver');

const resolvers = mergeResolvers([todoResolver]);

module.exports = resolvers;