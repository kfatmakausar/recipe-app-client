import React, { Component } from "react";
import Form from "./Form";
import UserProfile from "./containers/UserProfileContainer";
import axios from "axios";
import { Link } from "react-router-dom";
const API_KEY = "b2174079fceb4335a22508ae27c82eb6";
const added_recipes = [];
//exports.added_recipes = added_recipes;

export default class SearchPage extends Component {
  state = {
    recipes: [],
    added_recipes: []
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

  addRecipe(recipe) { //Add recipe

    added_recipes.push(recipe);
    this.state.added_recipes.push(recipe);

  }

  render() {
    const imageUrl = "https://spoonacular.com/recipeImages/";

    return ( 
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <h1 className="logo"> Search for your favorite meal </h1>

                <Link to="/userProfile">My Profile</Link>

              </div>
              <div className="row d-flex justify-content-center searchForm">
                <Form getRecipe={this.getRecipe} />
              </div>
              <div className="row"> 
                  {this.state.recipes.map((recipe,i) => (
                   <div className="col-md-4 recipeBox" key={i}> 
                    <img src={imageUrl + recipe.image} alt="" style={{width: '300px', height: '300px'}} /> <button onclick="addRecipe(recipe)">Add</button>
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