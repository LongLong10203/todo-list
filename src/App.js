import { useState } from "react"
import "./App.css"
import ToDoList from "./ToDoList"
import SearchBar from "./SearchBar"

function App() {
	const [searchStartsWith, setSearchStartsWith] = useState("")

	return (
		<div className="App">
			<h1>Todo List</h1>
			<SearchBar onSearch={(s) => setSearchStartsWith(s)} /><br />
			<ToDoList startswith={searchStartsWith} />
		</div>
	)
}

export default App