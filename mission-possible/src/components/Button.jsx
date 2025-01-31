import {useState} from React;

function Button({setTask}){

const [task, setTask] = useState("");

function addItem() {
  if (task.trim() === "") { 
      return;
  }

  setItems((prevItems) => [
      ...prevItems, 
      task 
  ]);

  setTask(""); 
}

    return (
        <>
        <input onChange={handleChange} type="text" value={task} />

        <div className="button-container">
        <button onClick={addItem} className="new-task">Add Task</button>
        </div>
        </>
    )
}

export default Button