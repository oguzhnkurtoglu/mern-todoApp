const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema({
	todo: {
		type: "String", // Specify the data type as String
		required: true,
	},
	complete: { type: "Boolean", default: false }, // Specify the data type as Boolean
	timestamp: { type: "Date", default: Date.now() }, // Specify the data type as Date
})

const Todo = mongoose.model("TodoModel", TodoSchema)

module.exports = Todo
