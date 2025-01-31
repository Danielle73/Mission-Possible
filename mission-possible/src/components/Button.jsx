import { useState } from "react";

function Button({ setItems }) {
  const [task, setTask] = useState(""); 

  function handleChange(event) {
    setTask(event.target.value); 
  }

  function addItem() {
    if (task.trim() === "") {
      return; 
    }

    setItems((prevItems) => [...prevItems, task.trim()]); 
    setTask(""); 
  }

  return (
    <>
      <input onChange={handleChange} type="text" value={task} placeholder="Enter a task" />

      <div className="button-container">
        <button onClick={addItem} className="new-task">Add Task</button>
      </div>
    </>
  );
}

export default Button;
