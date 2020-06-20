import React, { Component } from "react";
import Form from "../Components/containers/Form";
//import Recipes from "./Components/Recipes";
import "./App.css";
import axios from "axios";
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

        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <h1> Search for your favorite meal </h1>
              </div>

               {/* return search input from users*/}
              <div className="searchForm">
                <Form getRecipe={this.getRecipe} />
              </div>

              {/* maps title, image and link */}
              <div className="row"> 
                  {this.state.recipes.map((recipe,i) => (
                   <div className="col-md-4 recipeBox" key={i}> 
                    <img src={imageUrl + recipe.image} alt="" style={{width: '300px', height: '300px'}} />
                     <a href={recipe.sourceUrl} target="_blank"  rel="noopener noreferrer">  <p className="recipeTitle"> {recipe.title}</p></a>
                   </div>
                  ))}
              </div> 
            </div>
          </div>
        </div>
    
    );
  }
}
                  
                  
//test: <div> {console.log(this.state.recipes[0].sourceUrl)} </div>