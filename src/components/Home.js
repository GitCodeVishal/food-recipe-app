import React from 'react';

const Home = ({ fetchData }) => {
  console.log(fetchData);
  return (
    <div>
      {!fetchData && <p>Search for ur fav recipe</p>}
      {fetchData && (
        <section>
          {fetchData.recipes.map((recipe) => (
            <div key={recipe.recipe_id}>
              <p>{recipe.title}</p>
              <p>{recipe.publisher}</p>
              <img src={recipe.image_url} alt={recipe.title} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Home;
