const Todo = require('../models/todo');

const todoResolver = {
  Query: {
    todos: async () => await Todo.find(),
    getAllTodos: async () => await Todo.find(),
  },
  Mutation: {
    addTodo: async (_, { title }) => {
      const newTodo = new Todo({
        title,
        isCompleted: false,
      });
      return await newTodo.save();
    },
    toggleTodoCompleted: async (_, { id }) => {
      const todo = await Todo.findById(id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        await todo.save();
      }
      return todo;
    },
  },
};

module.exports = todoResolver;