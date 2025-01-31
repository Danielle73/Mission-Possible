import { useState } from "react";
import "./App.css";
import Task from "./components/Task";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const [tasks, setTasks] = useState([]); 

  return (
    <>
      <Header />
      <Button setItems={setTasks} /> 
      <div className="task-container">
        {tasks.map((task) => (
          <Task
            key={task.id} 
            id={task.id}
            name={task.name}
            description={task.description}
            priority={task.priority}
            completed={task.completed}
            deleteTask={(id) => setTasks(tasks.filter((task) => task.id !== id))} 
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
