import React, { Component } from "react";
import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import NavBarContainer from "../components/containers/NavBarContainer";
import AllRecipesContainer from "../components/containers/AllRecipesContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBarContainer />
        <header className="app-header">
          <RoutesContainer />
          <AllRecipesContainer />
        </header>
      </div>
    );
  }
}

export default App;
/*
import React, { Component } from "react";
import logo from "./logo.svg";
//import Form from "./Components/Form";
//import Recipes from "./Components/Recipes";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import axios from "axios";
//import Nav from "./Components/Nav"
import Nav from "../components/containers/Nav";
import Login from "../components/containers/Login";
import Signup from"../components/containers/Signup";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

   /* mockLogin = loginInfo => {
        const newUser = { ...this.state.currentUser };
        newUser.userName = loginInfo.userName;
        this.setState({ currentUser: newUser });
      };*/
//render() {
/*const Home = ()=> (
            <div>
                <h1>Recipe Cook Book</h1>
            </div>
        )

    const LoginComponent = () => (
        <Login
          user={this.state.currentUser}
          mockLogIn={this.mockLogIn}
          {...this.props}
        />
      );*/
/*  return (
            <Router>
             <div className="App">
                <Nav />
                <Switch>
                
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                </Switch>
             </div>
            </Router>
        )
       
        
    }


export default App;
*/
