import { useState } from "react";

function Button({ setItems }) {
  const [taskName, setTaskName] = useState(""); 
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium")

  function handleChange(event) {
    setTaskName(event.target.value); 
  }

  function handleDescriptionChange(event) {
    setTaskDescription(event.target.value); 
  }

  function handlePriortyChange(event){
    setTaskPriority(event.target.value);
  }

  function addItem() {
    if (taskName.trim() === "") {
      return; 
    } 

    const newTask = {
      id: Date.now(), 
      name: taskName.trim(),
      description: taskDescription.trim() || "No description", 
      priority: taskPriority, 
      completed: false, 
    };

    setItems((prevItems) => [...prevItems, newTask]); 
    setTaskName(""); 
    setTaskDescription("");
    setTaskPriority("Medium");
  }

  return (
    <>

      <div className="button-container">
        <button onClick= {addItem}  className="new-task">Add Task</button>
        <input onChange={handleChange} type="text" value={taskName} placeholder="Enter a task" />
        <textarea onChange={handleDescriptionChange} placeholder="Enter a description"></textarea>
        <select onChange={handlePriortyChange} value={taskPriority}> 
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        </select>

      </div>
    </>
  );
}

export default Button;
