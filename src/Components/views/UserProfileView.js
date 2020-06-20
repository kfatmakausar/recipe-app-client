//import React from "react";
import React, {Component} from 'react';
import { Link } from "react-router-dom";

//class UserProfileView extends Component {

    //const UserProfileView = (props) => { 

        

    //}



  //render() {

    //return 0;
    

  //}

//}

//export default UserProfileView;

const UserProfileView = (props) => {
  const { currentUser, handleChange, handleSubmit, handleReset, userInfo, addedRecipes } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>{`${currentUser.username || ""}`}</p>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <br></br>
          <br></br>
          <button>Display User</button>
        </form>
        <button onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
};

export default UserProfileView;