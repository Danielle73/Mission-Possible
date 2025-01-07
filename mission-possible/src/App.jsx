import './App.css'
import Task from './components/Task'
import tasks from './taskData'
import Footer from './components/Footer'

function createTask (taskEntry){

  return(
    <Task 
    key = {taskEntry.id}
    name = {taskEntry.name}
    completed = {taskEntry.completed}
    description = {taskEntry.description}
    priority = {taskEntry.priority}
    />
  )
}

function App() {

  return (
    <>
    {tasks.map(createTask)}
    <Footer />
    </>
  )
}

export default App
