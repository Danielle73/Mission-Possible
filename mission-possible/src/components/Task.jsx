/* eslint-disable react/prop-types */
import { useState } from "react";
import '/src/App.css'


function Task({ id, name, description, priority, completed, deleteTask }) {
    const [isCompleted, setIsCompleted] = useState(completed);

    return (
        <div>
            <div className={`task-card ${isCompleted ? "completed" : ""}`}>
                <div className="task-items">

                    <h2 className={isCompleted ? "crossed-line" : ""}>{name}</h2>
                    
                    <p className={isCompleted ? "crossed-line" : ""}>{description}</p>

                    <p className={`priority-${priority.toLowerCase()}`}>
                        Priority: {priority}
                    </p>
                    <button onClick={() => setIsCompleted(!isCompleted)} className="button">
                        {isCompleted ? "Undo" : "Complete"}
                    </button>
                    <button onClick={() => deleteTask(id)} className="button delete">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Task;
