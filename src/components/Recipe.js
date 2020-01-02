import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../App.css'

const Recipe = ({title, calories, image, ingredients}) => {

    return (
                <div className="col-10 col-lg-4 mx-auto mb-5" >
                    <Card className="card-style" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <ul>
                                <h3>Ingredients</h3>

                                {ingredients.map(ingredient => (
                                    <li>{ingredient.text}</li>
                                ))}
                            </ul>
                        </Card.Text>
                                <Button variant="primary">{calories.toFixed(2)} calories</Button>
                        </Card.Body>
                     </Card> 
                </div>
    )
}
export default Recipe;