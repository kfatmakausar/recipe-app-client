// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchPage from './Components/SearchPage.js';
import UserProfile from './Components/UserProfile.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: {
        userName: '',
        memberSince: '',
      }
    }
  }

  render() {

    const SearchPageComponent = () => (<SearchPage/>);
    const UserProfileComponent = () => (
        <UserProfile/>
    );

    return (
        <Router>
          <div>
            <Route exact path="/" render={SearchPageComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;