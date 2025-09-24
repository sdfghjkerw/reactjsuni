import React, {memo} from 'react'
import TodoItem from './todoitem'

const Todolist = memo(({tasks, toggleTask, deleteTask}) => {
    return(
        <ul>
            {tasks.map((task) => (
                <TodoItem 
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}/>
            ))}
        </ul>
    )
})

export default Todolist