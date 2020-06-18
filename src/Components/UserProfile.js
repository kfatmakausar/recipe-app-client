//import React from "react";
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Recipes from "./Components";

class UserProfile extends Component {

  render() {

    return (

        <div>

          <h1>User Profile</h1>

            <Link to="/">Search</Link>

            <div>Username: insert username value here</div>

        </div>



    );

  }

}

export default UserProfile;