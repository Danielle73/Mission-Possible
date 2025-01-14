import {useState} from 'react'
import Task from './Task'
import tasks from '../taskData'

function TaskList(){
    const [tasks, setTasks] = useState(tasks);

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !==id);
        setTasks(updatedTasks);
    }


return (
    <>
    {tasks.map(task => (
        <Task 
        key = {task.id}
        id = {task.id}
        name={task.name}
        description={task.description}
        priority={task.priority}
        completed={task.completed}
        deleteTask={deleteTask}
        />
    ))}
    </>
)}

export default TaskList;