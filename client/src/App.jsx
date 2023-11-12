import { useState, useEffect } from "react"
import axios from "axios"
import { useRef } from "react"

function App() {
	const [todos, setTodos] = useState([])
	const [newTodo, setnewTodo] = useState("")
	// const [popupActive, setpopupActive] = useState([false])
	const myRef = useRef("")

	const getData = () => {
		axios.get("http://localhost:3001/todos").then(data => setTodos(data.data))
	}
	const completeTodos = id => {
		axios.put(`http://localhost:3001/todos/complete/${id}`)
	}
	const deleteTodos = id => {
		axios.delete(`http://localhost:3001/todos/delete/${id}`)
	}
	const addTodos = async newTodo => {
		try {
			// Axios ile POST isteği gönder
			const response = await axios.post(
				"http://localhost:3001/todos/new",
				newTodo.json
			)
			console.log("Başarıyla gönderildi:", response.data)
		} catch (error) {
			console.error("Gönderme hatası:", error.message)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<h1>Wellcome ,Oguzhan</h1>
			<h4>Your Tasks</h4>
			<div className="addTask">
				<input
					ref={myRef}
					placeholder="Add a new task"
					type="text"
					onKeyDown={e => {
						if (e.key === "Enter") {
							setnewTodo(myRef.current.value)
							myRef.current.value = ""
							addTodos(newTodo)
						}
					}}
				/>
			</div>
			<div className="Todos">
				{todos.map(todos => (
					<div key={todos._id} className="Todo">
						<div className="checkbox"></div>
						<div
							onClick={() => {
								completeTodos(todos._id)
							}}
							className="text"
						>
							{todos.todo}
						</div>
						<div className="Completed">{todos.complete ? "1" : "2"}</div>
						<div className="date">{todos.date}</div>
						<div
							className="delete"
							onClick={() => {
								deleteTodos(todos._id)
							}}
						>
							X
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
