import React, {memo} from "react"

const TodoItem = memo(({task, toggleTask, deleteTask}) => {
    return(
        <li className="chkb">
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)}/>
        <span style={{textDecoration: task.completed ? "line-through" : "none"}}>{task.text}</span>
        <button onClick={() => deleteTask(task.id)}>удалить</button>
        </li>
    )
})

export default TodoItem