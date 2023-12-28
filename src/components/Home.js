import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = ({ fetchData }) => {

const[visibleRecipe , setVisibleRecipe] = useState(9);

const loadMore = () => {
  setVisibleRecipe((prevVisibleRecipe) => prevVisibleRecipe + 6);
}

const handleClick = () => {

}

  return (
    <div>
      {!fetchData && <p>Search for ur fav recipe</p>}
      {fetchData && (
        <section className='homeSection'>
          {fetchData.recipes.slice(0,visibleRecipe).map((recipe) => (
            <div key={recipe.recipe_id}>
              <p>{recipe.title}</p>
              <p>{recipe.publisher}</p>
              <img src={recipe.image_url} alt={recipe.title} />
              <NavLink to={`\details\${recipe.recipe_id}`}>
                <button>Recipe Details</button>
              </NavLink>
            </div>  
          ))}
          {fetchData.recipes.length > visibleRecipe && (<button onClick={loadMore}>Load More</button>)}
        </section>
        
      )}
    </div>
  );
};

export default Home;
