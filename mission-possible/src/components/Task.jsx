/* eslint-disable react/prop-types */
function Task(props){
    return ( 
        <>
        <div className="task-card">
        <div className="task-items">
        <h2>{props.name}</h2>
        <p>{props.completed}</p>
        <p>{props.description}</p>
        <p>{props.priority}</p>
        </div>
        </div>
        </>
     );
}
 
export default Task;