import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import {Container, Row, Col} from 'react-bootstrap';
import { GrDocumentUpdate } from "react-icons/gr";
import { HiDocumentRemove } from "react-icons/hi";

const TaskDetails = () => {
  const { id } = useParams();
  const {
    data: task,
    error,
    isPending,
  } = useFetch("http://localhost:4000/tasks/" + id);
  const history = useHistory();

  const handleDelete = () => {
    console.log("The record that will be deleted is ", id);
    fetch("http://localhost:4000/tasks/" + id, {
      method: "DELETE",
      headers : {"Content-Type" : "application/json"},
    }).then(() => {
      history.push("/");
    });
  };
  const setData = (data) => {
    console.log(data);
    let {id, taskKey, task, taskStatus, assignedTo} = data
    localStorage.setItem('id', id);
    localStorage.setItem('taskKey', taskKey);
    localStorage.setItem('task', task);
    localStorage.setItem('assignedTo', assignedTo);
    localStorage.setItem('taskStatus', taskStatus)
 }
  return (
    <div className="task-details">
      {isPending && <div> Loading...</div>}
      {error && <div> {error} </div>}
      {task && (
        <article>
          <div style={{boxShadow: '1px 3px 5px rgba(64, 128, 255, 2)'}}>
          <Container>
            <Row>
              <Col>
                <span><b>Task-ID</b></span>
              </Col>
              <Col xs={7}>
                <span><b>Task</b></span>
              </Col>
              <Col>
                <span><b>Status</b></span>
              </Col>
              <Col>
                <span><b>Assigned To</b></span>
              </Col>              
            </Row>
            <hr></hr>
            <Row>
              <Col>
                <span>{task.taskKey}</span>
              </Col>
              <Col xs={7}>
                <span>{task.task}</span>
              </Col>
              <Col>
                <span>{task.taskStatus}</span>
              </Col>
              <Col>
                <span>{task.assignedTo}</span>
              </Col>
            </Row>
          </Container>
          </div>
          <Link to={`/update/${task.id}`}><button onClick={() => setData(task)}><GrDocumentUpdate /> Update</button></Link>
          &nbsp;&nbsp;<button onClick={handleDelete}><HiDocumentRemove /> delete</button>
        </article>
      )}
    </div>
  );
};

export default TaskDetails;
