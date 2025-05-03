import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Button({ setItems }) {
  const [taskTitle, setTaskTitle] = useState(""); 
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("")

  function handleChange(event) {
    setTaskTitle(event.target.value); 
  }

  function handleDescriptionChange(event) {
    setTaskDescription(event.target.value); 
  }

  function handlePriortyChange(event){
    setTaskPriority(event.target.value);
  }

  function addItem() {
    if (taskTitle.trim() === "") {
      return; 
    } 

    const newTask = {
      title: taskTitle.trim(),
      description: taskDescription.trim() || "No description", 
      priority: taskPriority, 
    };

    fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })

    .then((res) => {
      if(!res.ok){
        throw new Error("Failed to create task");
      }
      return res.json();
    })

    .then((createdTask) => {
      setItems((prevItems) => [...prevItems, createdTask]); 
      setTaskTitle(""); 
      setTaskDescription("");
      setTaskPriority("Medium");
    })

    .catch((error) => {
      console.error("Error creating task:", error)
    })


   
  }

  return (
    <>

      <div className="button-container">
        <div className="task-maker-container">
        <input onChange={handleChange} type="text" value={taskTitle} placeholder="Enter a task" />
        <textarea onChange={handleDescriptionChange} value={taskDescription} placeholder="Enter a description"></textarea>
        <select onChange={handlePriortyChange} value={taskPriority}> 
        <option value="" disabled>Priority Level</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        </select>
        <button onClick= {addItem}  className="new-task">Add Task</button>
        </div>

      </div>
    </>
  );
}

export default Button;
