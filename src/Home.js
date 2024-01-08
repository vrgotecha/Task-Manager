import TaskList from './TaskList';
import useFetch from './useFetch';
import React from 'react';
const Home = () => {
    const {data:tasks, isPending, error} = useFetch('http://localhost:4000/tasks');
    return ( 
        <div className="home">
           { error && <div>{error} </div>}
           { isPending && <div> Loading... </div>}
           {tasks && <TaskList tasks={tasks} title="All Tasks!" ></TaskList>}
        </div>
     );
}
 
export default Home;