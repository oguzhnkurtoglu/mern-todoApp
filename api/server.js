const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/admin")

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB bağlantı hatası:"))
db.once("open", function () {
	console.log("MongoDB'ye başarıyla bağlandı")
})
app.listen(3001, () => console.log("Server Started 3001"))
