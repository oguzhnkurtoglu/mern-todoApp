const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
require("dotenv").config()
const Todo = require("./model/Todo")

app.use(express.json())
app.use(cors())

const dbUrl = process.env.DATABASE_URL
mongoose.connect(dbUrl)
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))
db.once("open", function () {
	console.log("MongoDB bağlantısı başarıyla sağlandı.")
})

app.get("/todos", async (req, res) => {
	const todos = await Todo.find()
	res.json(todos)
})

app.post("/todos/new", async (req, res) => {
	const todo = new Todo({ text: req.body.text })
	todo.save()
	res.json(todo)
})
app.delete("/todos/delete/:id", async (req, res) => {
	const result = new Todo.findById(req.params.id)
	res.json(result)
})
app.put("/todos/complete/:id", async (req, res) => {
	const todo = new Todo.findById(req.params.id)
	todo.complete = !todo.complete
	todo.save()
	res.json(todo)
})

app.listen(3001, () => console.log("Server Started 3001"))
