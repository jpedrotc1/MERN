const mongoose = require("mongoose")

const Todo = new mongoose.Schema( {
    text: String,
    complete: Boolean
})


module.exports = mongoose.model('Todo', Todo)