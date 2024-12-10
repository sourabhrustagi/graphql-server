const { gql } = require('apollo-server-express');

const todoSchema = gql`
  type Todo {
    id: ID!
    task: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
    getAllTodos: [Todo]
  }

  type Mutation {
    addTodo(task: String!): Todo
    toggleTodoCompleted(id: ID!): Todo
  }
`;

module.exports = todoSchema;