/* eslint-disable react/prop-types */
// import Button from "./Button";

import { useState } from "react";
import tasks from "../taskData";

function Task(props){

    const [completed, setCompleted] = useState(false);

    function isCompleted(){
       setCompleted(!completed); 
    };

   //  function isDeleted(){
   //    alert("Delete this Task?")
   //    filter()
   //  }

   const [deletedTasks, setDeletedTasks] = useState(tasks)

    
    function deleteTask(id) {
      const updatedTasks = deletedTasks.filter(task => task.id !== id);
      setDeletedTasks(updatedTasks);
    }
    

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
        <button onClick={isCompleted} className="button">Complete</button>
        <button onClick={() => deleteTask(props.id)} className="button delete">Delete</button>
        </div>
        </div>
        </div>
        
        </>
     );
}
 
export default Task;
