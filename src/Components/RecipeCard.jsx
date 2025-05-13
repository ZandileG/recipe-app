import React from "react";
import "../Styles/RecipeCard.css";

function RecipeCard({recipe, onSelect}) {

  return (
      <main className="recipe-card" onClick={onSelect}>
        <section className="card1">
          <img className="recipe-image" src={`https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp`} alt="Recipe" />
        </section>
        <section className="card2"><h4>{recipe.name}</h4></section>
      </main>
  );
}

export default RecipeCard;