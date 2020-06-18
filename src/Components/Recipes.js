import React from 'react';

function Recipes(props) {
    console.log(props);
    return (
        <div>
            <br/>
            <h2>Search Result</h2>
            {props.searchResult.map((recipe)=>{
                return recipe.name;
            })}
        </div>
    )
}

export default Recipes