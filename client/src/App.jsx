import { useState, useEffect } from "react"
import axios from "axios"

const API_BASE_URL = "https://localhost/3001"

function App() {
	const [todos, setTodos] = useState([])
	const [newTodo, setnewTodo] = useState("")
	const [popupActive, setpopupActive] = useState([false])

	useEffect(() => {
		getTodos(API_BASE_URL + "/todos")
		console.log(todos)
	}, [])

	const getTodos = url => {
		axios
			.get(url)
			.then(response => setTodos(response))
			.catch(error => console.log(error, "Error"))
	}
	return (
		<>
			<h1>Wellcome ,Oguzhan</h1>
			<h4>Your Taks</h4>

			<div className="Todos">
				{todos.map(todos => (
					<div key={todos.id} className="Todo">
						<div className="checkbox"></div>
						<div className="text">Buy Bread</div>
						<div className="delete-todo">x</div>
					</div>
				))}
			</div>
		</>
	)
}

export default App
