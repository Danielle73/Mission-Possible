import { useState } from "react";

function Button({ setItems }) {
  const [taskName, setTaskName] = useState(""); 

  function handleChange(event) {
    setTaskName(event.target.value); 
  }

  function addItem() {
    if (taskName.trim() === "") {
      return; 
    }

    const newTask = {
      id: Date.now(), 
      name: taskName.trim(),
      description: "No description", 
      priority: "Medium", 
      completed: false, 
    };

    setItems((prevItems) => [...prevItems, newTask]); 
    setTaskName(""); 
  }

  return (
    <>
      <input onChange={handleChange} type="text" value={taskName} placeholder="Enter a task" />

      <div className="button-container">
        <button onClick={addItem} className="new-task">Add Task</button>
      </div>
    </>
  );
}

export default Button;
