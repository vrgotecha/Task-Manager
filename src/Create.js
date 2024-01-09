import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { MdAddTask } from "react-icons/md";

const Create = () => {
    const [taskKey, settaskKey] = useState('');
    const [task, setTask] = useState('');
    const [assignedTo, setAssignedTo] = useState('Vivek');
    const [taskStatus, setTaskStatus] = useState('TO DO');
    const [isPending, setIsPending] = useState(false);
    //const [team, setTeam] = useState('');
    const history = useHistory();
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const taskDetails = {taskKey, task, taskStatus, assignedTo};

        setIsPending(true);

        fetch('http://localhost:4000/tasks', {
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(taskDetails)
        }).then(() => {
            console.log('new task added');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add New Task</h2>
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

                <label ><b>Assigned To:</b></label>
                <select
                value = {assignedTo}
                onChange = {(e)=>{setAssignedTo(e.target.value)}}>
                    <option value="Vivek">Vivek</option>
                    <option value="Sachin">Sachin</option>
                    <option value="Mayur">Mayur</option>
                    <option value="Rakesh">Rakesh</option>
                    <option value="Mayank">Mayank</option></select>


                <label ><b>Status:</b></label>
                <select
                value = {taskStatus}
                onChange = {(e)=>{setTaskStatus(e.target.value)}}>
                    <option value="TO DO">TO DO</option>
                    <option value="IN PROGRESS">IN PROGRESS</option>
                    <option value="IN REVIEW">IN REVIEW</option>
                    <option value="DONE">DONE</option></select>

                {!isPending && <button><MdAddTask /> Add Task</button>}
                {isPending && <button>Adding Task... </button>}
            </form>
        </div>
    );
}
 
export default Create;