import { useState } from "react";

function Button({ setItems }) {
  const [taskName, setTaskName] = useState(""); 
  const [taskDescription, setTaskDescription] = useState("");

  function handleChange(event) {
    setTaskName(event.target.value); 
  }

  function handleDescriptionChange(event) {
    setTaskDescription(event.target.value); 
  }

  function addItem() {
    if (taskName.trim() === "") {
      return; 
    } 

    const newTask = {
      id: Date.now(), 
      name: taskName.trim(),
      description: taskDescription.trim() || "No description", 
      priority: "Medium", 
      completed: false, 
    };

    setItems((prevItems) => [...prevItems, newTask]); 
    setTaskName(""); 
    setTaskDescription("");
  }

  return (
    <>

      <div className="button-container">
        <button onClick= {addItem}  className="new-task">Add Task</button>
        <input onChange={handleChange} type="text" value={taskName} placeholder="Enter a task" />
        <textarea onChange={handleDescriptionChange} placeholder="Enter a description"></textarea>
      </div>
    </>
  );
}

export default Button;
