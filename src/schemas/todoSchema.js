const { gql } = require('apollo-server-express');

const todoSchema = gql`
  type Todo {
    id: ID!
    title: String!
    isCompleted: Boolean!
  }

  type Query {
    todos: [Todo]
    getAllTodos: [Todo]
  }

  type Mutation {
    addTodo(title: String!): Todo
    toggleTodoCompleted(id: ID!): Todo
  }
`;

module.exports = todoSchema;