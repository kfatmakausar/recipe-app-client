import React from "react";
import "./styles/NavBarView.css";
import { Link, withRouter } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to="/home">
          <l1>Home</l1>
        </Link>
        <Link to="/login">
          <l1>Login</l1>
        </Link>
        <Link to="/signup">
          <l1>Signup</l1>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBarView;
