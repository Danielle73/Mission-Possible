/* eslint-disable react/prop-types */
function Task(props){
    return ( 
        <>
        <h1>{props.name}</h1>
        <p>{props.completed}</p>
        <p>{props.description}</p>
        <p>{props.priority}</p>
        </>
     );
}
 
export default Task;