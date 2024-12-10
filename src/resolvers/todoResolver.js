const Todo = require('../models/todo');

const todoResolver = {
  Query: {
    todos: async () => await Todo.find(),
    getAllTodos: async () => await Todo.find(),
  },
  Mutation: {
    addTodo: async (_, { task }) => {
      const newTodo = new Todo( {task, completed:false});
      return await newTodo.save();
    },
    toggleTodoCompleted: async (_, { id }) => {
      const todo = await Todo.findById(id);
      if (todo) {
        todo.completed = !todo.completed;
        await todo.save();
      }
      return todo;
    },
  },
};

module.exports = todoResolver;