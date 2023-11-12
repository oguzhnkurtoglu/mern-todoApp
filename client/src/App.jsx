import { useState, useEffect } from "react"
import axios from "axios"

function App() {
	const [todos, setTodos] = useState([])
	const [newTodo, setnewTodo] = useState("")
	const [popupActive, setpopupActive] = useState([false])

	useEffect(() => {
		axios.get("http://localhost:3001/todos").then(data => setTodos(data.data))
	}, [])

	return (
		<>
			<h1>Wellcome ,Oguzhan</h1>
			<h4>Your Taks</h4>

			<div className="Todos">
				{todos.map(todos => (
					<div className="Todo">
						<div className="checkbox"></div>
						<div className="text">{todos.todo}</div>
						<div className="delete-todo">x</div>
					</div>
				))}
			</div>
		</>
	)
}

export default App
