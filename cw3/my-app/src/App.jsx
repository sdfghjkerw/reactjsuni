import { useState, useEffect } from "react";

export default function Todolist() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

const addTask = () => {
  setTasks([...tasks, task])
  setTask("")
}

useEffect(() => {
  if(tasks.length > 10){
    alert("более 10 задач")
  }
}, [tasks])

return(
  <div className="container">
    <h1>to-do listt</h1>
    <div className="inp">
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="введите задачу!"></input>
      <button onClick={addTask}>добавить задачу</button>
    </div>
    <ul className="spsk">
      {tasks.map((t, index) => (
        <li key={index}>{t}</li>
      ))}
    </ul>
  </div>
)
}