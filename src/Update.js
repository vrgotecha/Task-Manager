import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GrDocumentUpdate } from "react-icons/gr";

const Update = () => {
    const [idStr, setIdStr] = useState(null);
    const [taskKey, settaskKey] = useState('');
    const [task, setTask] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIdStr(localStorage.getItem('id'));
        settaskKey(localStorage.getItem('taskKey'))
        setTask(localStorage.getItem('task'));
        setAssignedTo(localStorage.getItem('assignedTo'));
        setTaskStatus(localStorage.getItem('taskStatus'))
}, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = parseInt(idStr)
        const taskDetails = {taskKey, task, taskStatus, assignedTo, id};

        setIsPending(true);

        fetch('http://localhost:4000/tasks/' + id, {
            method : 'PUT',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(taskDetails)
        }).then(() => {
            console.log(taskDetails)
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Update Task</h2>
            <form onSubmit = {handleSubmit}>
                <label ><b>Task Id:</b></label>
                <input 
                type="text"
                value = {taskKey}
                onChange = {(e) => {settaskKey(e.target.value)}}
                required 
                />

                <label ><b>Task:</b></label>
                <textarea
                value = {task}
                onChange = {(e)=>{setTask(e.target.value)}}
                required></textarea>

                <label><b>Assigned To:</b></label>
                <select
                value = {assignedTo}
                onChange = {(e)=>{setAssignedTo(e.target.value)}}>
                    <option value="Vivek">Vivek</option>
                    <option value="Sachin">Sachin</option>
                    <option value="Mayur">Mayur</option>
                    <option value="Rakesh">Rakesh</option>
                    <option value="Mayank">Mayank</option>
                </select>


                <label><b>Status:</b></label>
                <select
                value = {taskStatus}
                onChange = {(e)=>{setTaskStatus(e.target.value)}}>
                    <option value="TO DO">TO DO</option>
                    <option value="IN PROGRESS">IN PROGRESS</option>
                    <option value="IN REVIEW">IN REVIEW</option>
                    <option value="DONE">DONE</option>
                </select>

                {!isPending && <button><GrDocumentUpdate /> Update Task</button>}
                {isPending && <button>Updating Task... </button>}
            </form>
        </div>
    );
}
 
export default Update;