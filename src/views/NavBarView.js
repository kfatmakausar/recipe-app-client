import React from "react";
import "./NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
     
    </nav>
  );
};

export default NavBarView;
