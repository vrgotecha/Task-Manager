import React from "react";
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
import { FcCheckmark, FcCollaboration, FcWorkflow, FcTodoList } from "react-icons/fc";
const TaskList = ({tasks, title}) => {
    return ( 
        <div className="task-list">
            <h2>{title} </h2>
            <hr></hr>
            <h3 style={{color:'crimson', borderBottom:'4px double crimson'}}><FcTodoList style={{backgroundColor:'cyan'}}/> TO DO</h3>
             {tasks.filter(task => task.taskStatus ==='TO DO').map((task) => (
                <div className="task-preview" key = {task.id}>
                    <Link to = {`/tasks/${task.id}`}>
                        <Container>
                            <Row>
                                <Col>
                                    <h2> <span style={{color:'crimson'}}>{task.taskId}</span></h2> 
                                </Col>
                                <Col xs={8}>
                                    <h2>{task.task}</h2>
                                </Col>
                                <Col>
                                    <h2><span style={{color:'crimson'}}>{task.assignedTo}</span></h2>
                                </Col>
                            </Row>
                        </Container>
                    </Link>
                </div>
            ))}
            <h3 style={{color:'orange', borderBottom:'4px double orange'}}><FcWorkflow style={{backgroundColor:'pink'}}/> IN PROGRESS</h3>
             {tasks.filter(task => task.taskStatus ==='IN PROGRESS').map((task) => (
                <div className="task-preview" key = {task.id}>
                    <Link to = {`/tasks/${task.id}`}>
                        <Container>
                            <Row>
                                <Col>
                                    <h2> <span style={{color:'orange'}}>{task.taskId}</span></h2> 
                                </Col>
                                <Col xs={8}>
                                    <h2>{task.task}</h2>
                                </Col>
                                <Col>
                                    <h2><span style={{color:'orange'}}>{task.assignedTo}</span></h2>
                                </Col>
                            </Row>
                        </Container>
                    </Link>
                </div>
            ))}
            <h3 style={{color:'steelblue', borderBottom:'4px double steelblue'}}><FcCollaboration style={{backgroundColor:'black'}}/> IN REVIEW</h3>
             {tasks.filter(task => task.taskStatus ==='IN REVIEW').map((task) => (
                <div className="task-preview" key = {task.id}>
                    <Link to = {`/tasks/${task.id}`}>
                        <Container fluid="md">
                            <Row>
                                <Col>
                                    <h2> <span style={{color:'steelblue'}}>{task.taskId}</span></h2> 
                                </Col>
                                <Col xs={8}>
                                    <h2>{task.task}</h2>
                                </Col>
                                <Col>
                                    <h2><span style={{color:'steelblue'}}>{task.assignedTo}</span></h2>
                                </Col>
                            </Row>
                        </Container>
                    </Link>
                </div>
            ))}
            <h3 style={{color:'green', borderBottom:'4px double green'}}><FcCheckmark style={{backgroundColor:'black'}}/> DONE</h3>
             {tasks.filter(task => task.taskStatus ==='DONE').map((task) => (
                <div className="task-preview" key = {task.id}>
                    <Link to = {`/tasks/${task.id}`}>
                        <Container fluid="md">
                            <Row>
                                <Col>
                                    <h2> <span style={{color:'green'}}>{task.taskId}</span></h2> 
                                </Col>
                                <Col xs={8}>
                                    <h2>{task.task}</h2>
                                </Col>
                                <Col>
                                    <h2><span style={{color:'green'}}>{task.assignedTo}</span></h2>
                                </Col>
                            </Row>
                        </Container>
                    </Link>
                </div>
            ))}
        </div> 
     );
}
export default TaskList;