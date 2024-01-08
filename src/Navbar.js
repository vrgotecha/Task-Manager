import React from "react";
import {Link} from 'react-router-dom';
import { FaHome, FaTasks } from "react-icons/fa";
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Task Management</h1>
            <div className="links">
                <Link to="/"style = {{
                    color : "white",
                    backgroundColor : "#f1356d",
                    borderRadius : '8px'
                }}><FaHome /> Home</Link>
                <Link to="/create" style = {{
                    color : "white",
                    backgroundColor : "#f1356d",
                    borderRadius : '8px'
                }}><FaTasks /> New Task</Link>
            </div>
        </nav>
    );
}


export default Navbar;