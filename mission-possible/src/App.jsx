import './App.css'
import Task from './components/Task'
import tasks from './taskData'

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
    </>
  )
}

export default App
