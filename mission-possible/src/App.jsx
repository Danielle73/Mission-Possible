import './App.css'
import Task from './components/Task'
import tasks from './taskData'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'



function App() {

return (
    <>
    <Header />
    <Button />

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
