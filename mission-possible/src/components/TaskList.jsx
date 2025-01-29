import { useState } from "react";
import Task from "./Task";
import taskData from "../taskData";

function TaskList() {
    const [tasks, setTasks] = useState(taskData);

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <>
        <div className="task-container">
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    description={task.description}
                    priority={task.priority}
                    completed={task.completed}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
        </>
    );
}

export default TaskList;
