import {useState} from React;

function Button(){

const [task, setTask] = useState("");
const [items, setItems] = useState([]);

function handleChange(event) {
    const newValue = event.target.value;

    setTask(newValue);
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