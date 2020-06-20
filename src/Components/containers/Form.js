import React from 'react'
import "./Form.css";

function Form(props) {
    return (
        <div>
            <form onSubmit={props.getRecipe}>
                <input type="text" name="recipeName" className="container-1" placeholder="Search Recipe..."/>
                <input type="submit" value="Go"/>
            </form>
        </div>
    )
}

export default Form