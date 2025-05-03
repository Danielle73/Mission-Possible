import { useState, useEffect } from "react";
import "./App.css";
import Task from "./components/Task";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const [tasks, setTasks] = useState([]); 

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`)
    .then((res) => res.json())
    .then((data) => setTasks(data))
    .catch((err) => console.error('Error fetching tasks:', err));
  }, []);

  function deleteTask(taskId){
    fetch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, {
      method:'DELETE',
    })
    .then((res) =>{
      if(!res.ok){
        throw new Error('Failed to delete task');
      }
      return res.json();
    })
    .then(() => {
      setTasks((prevItems) => prevItems.filter((task) => task.id !== taskId));
    })

    .catch((err) => {
      console.error('Error deleting task:', err);
    })

  }


  return (
    <>
      <Header />
      <Button setItems={setTasks} /> 
      <div className="task-container">
        {tasks.map((task) => (
          <Task
            key={task.id} 
            id={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            completed={task.completed}
            deleteTask={deleteTask}
            // deleteTask={(id) => setTasks(tasks.filter((task) => task.id !== id))} 
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
