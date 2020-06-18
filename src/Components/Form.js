import React from 'react'

function Form(props) {
    return (
        <div>
            <form onSubmit={props.getRecipe}>
                <input type="text" name="recipeName" id="recipeName" placeholder="Search Recipe..."/>
                <input type="submit" value="Go"/>
            </form>
        </div>
    )
}

export default Form