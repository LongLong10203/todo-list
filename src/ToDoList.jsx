import { useState } from 'react'
import "./ToDoList.css"

function ToDoList({ startswith }) {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")

    function addTask() {
        if (task) {
            setTasks([...tasks, task])
            setTask("")
        }
    }

    function removeTask(index) {
        if (window.confirm("Are you sure you want to remove this task?")) {
            setTasks(tasks.filter((_, i) => i !== index))
        }
    }

    function modifyTask(index) {
        const newTask = prompt("Modify task:", tasks[index])
        if (newTask) {
            setTasks(tasks.map((t, i) => (i === index ? newTask : t)))
        }
    }

    return (
        <div>
            <div className="todo-add">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="todo-list">
                {tasks.map((task, index) => {
                    if (!task.startsWith(startswith)) return null
                    return (
                        <li key={index}>
                            {task}
                            <button className="modify" onClick={() => modifyTask(index)}>Modify</button>
                            <button className="remove" onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoList