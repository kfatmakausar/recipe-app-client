//import React from "react";
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import SearchPage from "./SearchPage";
//var added_recipes = require('./SearchPage').added_recipes;

let added_recipes = SearchPage.added_recipes;

//const added_recipes = added_recipes;

class UserProfile extends Component {

  state = {
    recipes: []
  };

  //addRecipe(recipe) {

    //this.state.recipes.push(recipe);

  //}

  render() {

    const imageUrl = "https://spoonacular.com/recipeImages/";

    return (

        <div>

          <h1>User Profile (Username)</h1>

            <Link to="/">Search</Link>

            <div>My Recipes</div>

            <div className="row"> 
                  {added_recipes.map((recipe,i) => (

                    //if(recipe.added === true) {

                   <div className="col-md-4 recipeBox" key={i}> 
                    <img src={imageUrl + recipe.image} alt="" style={{width: '300px', height: '300px'}} /> <button onclick="madeRecipe(recipe)">Mark as Done</button>
                     <a href={recipe.sourceUrl} target="_blank"  rel="noopener noreferrer">  <p className="recipeTitle"> {recipe.title}</p></a>
                   </div>

                    //}

                  ))}
              </div>

        </div>

    );

  }

}

export default UserProfile;