// /src/schemas/index.js
const { mergeTypeDefs } = require('@graphql-tools/merge');
const todoSchema = require('./todoSchema');

const typeDefs = mergeTypeDefs([todoSchema]);

module.exports = typeDefs;