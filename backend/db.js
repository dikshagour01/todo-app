const mongoose = require("mongoose");

// mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todos
// .env
mongoose.connect("mongodb+srv://User_diksha:hSKB7GpRjkpJL0vi@cluster0.l59nune.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

//mongodb+srv://diksha_todos:Cj2bpUwFIj4aCZ3x@cluster0.l59nune.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://User_diksha:hSKB7GpRjkpJL0vi@cluster0.l59nune.mongodb.net/