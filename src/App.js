import React, {useEffect, useState } from 'react'; 
import Recipe from './components/Recipe';
import Footer from './components/Footer'
import { Container, Row } from 'react-bootstrap'
import './App.css';

const App = () => {

  const APP_ID = "e2418512"
  const APP_KEY = "23470e8ac50873c9ec8e78319f02f719"

  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
  

  useEffect(() => {
    getRecipes();
    
  }, [query]);

 
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    
  };
  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  let i = 0
  return (
    <div>
      <nav class="navbar">
      <a class="navbar-brand" href="/">Recipe App </a>
        <form onSubmit={getSearch} className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <input type="text" className="form-control" id="search" placeholder="Search your recipe"  value={search} onChange={updateSearch} />
            </div>
          <button  type="submit" className="btn btn-outline-primary"> Search </button>
         </form>
      </nav>
      <Container>
       <h1 className="text-center">List of diffrent  {query}'s recipe</h1>
        <Row className="row mt-5">
        {recipes.map(recipe => (
         
          <Recipe key={i++}  title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image }
          ingredients={recipe.recipe.ingredients} />
        ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;