/* eslint-disable react/prop-types */
// import Button from "./Button";

import { useState } from "react";

function Task(props){

    const [completed, setCompleted] = useState(false);

    function isCompleted(){
       setCompleted(!completed); 
    };

    return ( 
        <>
        <div className="task-container">
        <div className={`task-card ${completed ? "completed" : ""}`}>
        <div className="task-items">
        <h2 style={{ textDecoration: completed ? "line-through" : "none" }}>{props.name}</h2>
        <p>{props.completed}</p>
        <p style={{ textDecoration: completed ? "line-through" : "none" }}>{props.description}</p>
        <p className={`priority-${props.priority.toLowerCase()}`}>
        Priority: {props.priority}
        </p>
        <button onClick={isCompleted}>Complete</button>
        </div>
        </div>
        </div>
        
        </>
     );
}
 
export default Task;
