import React from 'react'
import '../App.css'

const Recipe = ({title, calories, image, ingredients}) => {

    
    
    return (
            <div className='card'>
                <img src={image} className="card-img-top" alt={title}/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
                        <ul>
                            <h3>Ingredient</h3>
                            {ingredients.map(ingredient => (
                                <li>{ingredient.text}</li>
                            ) )}
                        </ul>
                        <a href="#" class="btn btn-primary">{calories.toFixed(2)} Calories</a>
                    </p>
                </div>
                <br/>
            </div>
        
    )
}
export default Recipe;