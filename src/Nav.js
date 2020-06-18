import React from "react";
import {Link} from "react-router-dom";
import "./App.css";

function Nav() {

    const navStyle = {
        color: 'white'
    } 
    
        return (
            <nav >
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to= "/login">
                         <l1>Login</l1>
                    </Link>
                    <Link style={navStyle} to="/signup">
                          <l1 >Signup</l1>
                    </Link>
                </ul>
                
            </nav>
        )
       
        
    }


export default Nav;