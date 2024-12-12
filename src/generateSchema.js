const fs = require('fs');
const { schemaComposer } = require('graphql-compose');
const { composeWithMongoose } = require('graphql-compose-mongoose');
const mongoose = require('mongoose');
const Todo = require('./models/todo'); // Adjust the path if necessary

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create GraphQL schema from Mongoose model
const TodoTC = composeWithMongoose(Todo);

schemaComposer.Query.addFields({
  todoById: TodoTC.getResolver('findById'),
  todoByIds: TodoTC.getResolver('findByIds'),
  todoOne: TodoTC.getResolver('findOne'),
  todoMany: TodoTC.getResolver('findMany'),
  todoCount: TodoTC.getResolver('count'),
});

schemaComposer.Mutation.addFields({
  todoCreateOne: TodoTC.getResolver('createOne'),
  todoCreateMany: TodoTC.getResolver('createMany'),
  todoUpdateById: TodoTC.getResolver('updateById'),
  todoUpdateOne: TodoTC.getResolver('updateOne'),
  todoUpdateMany: TodoTC.getResolver('updateMany'),
  todoRemoveById: TodoTC.getResolver('removeById'),
  todoRemoveOne: TodoTC.getResolver('removeOne'),
  todoRemoveMany: TodoTC.getResolver('removeMany'),
});

const schema = schemaComposer.buildSchema();

// Write the schema to a file
fs.writeFileSync('./schema.graphql', schemaComposer.toSDL());

console.log('GraphQL schema generated and saved to schema.graphql');