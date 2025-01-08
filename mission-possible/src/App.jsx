import './App.css'
import Task from './components/Task'
import tasks from './taskData'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {

  return (
    <>
    <Header />
    {tasks.map( (taskEntry) => {

return(
  <Task 
  key = {taskEntry.id}
  name = {taskEntry.name}
  completed = {taskEntry.completed}
  description = {taskEntry.description}
  priority = {taskEntry.priority}
  />
)
})}
    <Footer />
    </>
  )
}

export default App
