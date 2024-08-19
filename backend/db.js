import mongoose from "mongoose";

mongoose.connect('mongodb+srv://neeraj:neeraj@cluster0.ryrmrub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
}) 

const todo = mongoose.model('todos', todoSchema)

export {todo}