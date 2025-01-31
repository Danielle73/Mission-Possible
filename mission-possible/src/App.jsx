import { useState } from 'react'
import './App.css'
import Task from './components/Task'
import tasks from './taskData'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import taskData from './taskData'



function App() {

  const[tasks, setTasks] = useState(taskData);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
};


return (
    <>
    <Header />
    <Button setTasks = {setTasks}/>

    {tasks.map( (taskEntry) => {
return(
  <Task 
  key = {taskEntry.id}
  id = {taskEntry.id}
  name = {taskEntry.name}
  completed = {taskEntry.completed}
  description = {taskEntry.description}
  priority = {taskEntry.priority}
  deleteTask={deleteTask}
  />
)
})}
    <Footer />
    </>
  )
}

export default App
