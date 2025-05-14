import React, { useContext } from "react";
import { SavedContext } from "../Context/SavedContext";
import { ThemeContext } from "../Context/ThemeContext";

import Save from "../Images/Icon.webp";
import Delete from "../Images/Icon2.webp";
import "../Styles/RecipeCard.css";

function RecipeCard({recipe}) {
const {theme} = useContext(ThemeContext);
const { saveRecipe, removeRecipe, isSaved } = useContext(SavedContext);

  const saved = isSaved(recipe.id); 

  return (
      <main className={`recipe-card ${theme}`}>
        <section className="card1">
           <img className={`save-shortcut ${isSaved (recipe) ? "hidden" : "inline-block"}`} src={Save} alt="Save"  
           onClick={e => { 
            e.stopPropagation();
            saveRecipe(recipe);
            }}/>

           <img className={`delete-shortcut ${isSaved (recipe.id) ? "inline-block" : "hidden"}`} src={Delete} alt="Delete" 
           onClick={e => {
            e.stopPropagation();
            removeRecipe(recipe.id);
            }}/>
          <img className="recipe-image" src={`https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp`} alt="Recipe" />
        </section>
        <section className={`card2 ${theme}`}><h4>{recipe.name}</h4></section>
      </main>
  );
}

export default RecipeCard;