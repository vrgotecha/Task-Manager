import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import TaskDetails from './TaskDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>

            <Route path = "/create">
              <Create />
            </Route>

            <Route path = "/update/:id">
              <Update />
            </Route>


            <Route path = "/tasks/:id">
              <TaskDetails />
            </Route>

            <Route path = "*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
