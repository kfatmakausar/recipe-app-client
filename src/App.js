import React, { Component } from "react";
import Form from "./Components/Form";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserProfile from './Components/UserProfile';
//import Recipes from "./Components/Recipes";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
//import Nav from "./Components/Nav"
const API_KEY = "b2174079fceb4335a22508ae27c82eb6";

export default class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    e.preventDefault();
    const search = e.target.elements.recipeName.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?query=${search}&number=5&apiKey=${API_KEY}`
      )
      .then(res => {
        const recipes = res.data.results;
        console.log(res.data);
        this.setState({ recipes: recipes});
      });
  };

  render() {
    const imageUrl = "https://spoonacular.com/recipeImages/";

    

    return ( 
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <h1 className="logo"> Search for your favorite meal </h1>

                <Router>
                <div>
                  <Route exact path = "/"/>
                  <Link to ="/userProfile">User Profile</Link>{" "}
                </div>
                </Router>

              </div>
              <div className="row d-flex justify-content-center searchForm">
                <Form getRecipe={this.getRecipe} />
              </div>
              <div className="row"> 
                  {this.state.recipes.map((recipe,i) => (
                   <div className="col-md-4 recipeBox" key={i}> 
                    <img src={imageUrl + recipe.image} alt="" style={{width: '300px', height: '300px'}} /> <button onclick="addRecipe()">Add</button>
                     <a href={recipe.sourceUrl} target="_blank"  rel="noopener noreferrer">  <p className="recipeTitle"> {recipe.title}</p></a>
                   </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
                  
                  
//test: <div> {console.log(this.state.recipes[0].sourceUrl)} </div>