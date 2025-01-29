/* eslint-disable react/prop-types */
import { useState } from "react";

function Task({ id, name, description, priority, completed, deleteTask }) {
    const [isCompleted, setIsCompleted] = useState(completed);

    return (
        <div>
            <div className={`task-card ${isCompleted ? "completed" : ""}`}>
                <div className="task-items">
                    <h2 style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
                        {name}
                    </h2>
                    <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
                        {description}
                    </p>
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
