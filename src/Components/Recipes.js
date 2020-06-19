import React from 'react';

function Recipes(props) {
    console.log(props);
    return (
        <div>
            <br/>
            <h2>Search Result</h2>
            {props.searchResult.map((recipe)=>{
                return recipe.name; //Return the recipe's name
                return recipe.added; //Was the recipe added yet?
                return recipe.made; //Was the recipe made yet?
            })}
        </div>
    )
}

export default Recipes