import React, { useContext } from "react";
import { SavedContext } from "../Context/SavedContext";
import { ThemeContext } from "../Context/ThemeContext";

import Save from "../Images/Icon.webp";
import Delete from "../Images/Icon2.webp";
import "../Styles/RecipeCard.css";

function RecipeCard({recipe}){
const {theme} = useContext(ThemeContext);
const { saveRecipe, removeRecipe, isSaved } = useContext(SavedContext);

//I don't want to write the full thing so I'm using saved as a shorthand
const saved = isSaved(recipe.id); 

  return (
      <main className={`recipe-card ${theme} ${saved}`}>
        <section className="card1">
           <button><img className={`save-shortcut ${saved ? "hidden" : "inline-block"}`} src={Save} alt="Save"  
           onClick={e => { /*This makes sure that the recipe doesn't open when the recipe is being saved*/
            e.stopPropagation();
            saveRecipe(recipe);
            }}/></button>

           <button><img className={`delete-shortcut ${saved ? "inline-block" : "hidden"}`} src={Delete} alt="Delete" 
           onClick={e => {
            e.stopPropagation();
            removeRecipe(recipe.id);
            }}/></button>
          <img className="recipe-image" src={`https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp`} alt="Recipe" />
        </section>
        <section className={`card2 ${theme}`}><h4>{recipe.name}</h4></section>
      </main>
  );
}

export default RecipeCard;