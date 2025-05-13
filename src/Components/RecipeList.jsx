import axios from "axios";
import React, {Fragment, useEffect, useState, useContext} from "react";
import { SavedContext } from "../Context/SavedContext";

import RecipeCard from "./RecipeCard";
import "../Styles/RecipeCard.css";

function RecipeList({searchQuery}) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const {saveRecipe, removeRecipe, isSaved} = useContext(SavedContext);

  const URL = "https://dummyjson.com/recipes";
  const SEARCH_URL=`https://dummyjson.com/recipes/search?q=${searchQuery}`;

  useEffect(() => {
    async function fetchRecipes(){
      try{
        const url = searchQuery? SEARCH_URL : URL;
        const {data} = await axios.get(url);
        setRecipes(data.recipes);
      } catch (error){
        console.log(error);
      }
    }

//This saves processing power
  const timeOutFunction = setTimeout(() => {
    fetchRecipes();
  }, 1000);

  return() => {
    clearTimeout(timeOutFunction);
  }
}, [searchQuery]);

function handleClose(){
  setFadeOut(true);
  setTimeout(() => {
  setSelectedRecipe(null);
  setFadeOut(false);
}, 500); 
};

  return (
    <section className="recipe-list">
      {recipes.map((recipe) =>(
        <Fragment key={recipe.id}>
          <RecipeCard recipe={recipe} onSelect={() =>

//toggling the selection of recipes: if you click on a currently selected recipe the code returns null, meaning that the recipe will close. If you click on another recipe, it will be selected and it will open.
            setSelectedRecipe(selectedRecipe?.id === recipe.id ? null: recipe) 
         }/>
          {selectedRecipe?.id === recipe.id && (
            <section className={`modal-overlay ${fadeOut ? "fade-out" : ""}`} onClick={handleClose}>
           
            <section className="modal-content" onClick={(e) => e.stopPropagation() /*stops the modal from closing everytime you click on it, closong should only be triggered by clicking a button or clicking outside the modal*/}>
              <section>
              <img className="modal-backdrop" src={`https://dummyjson.com/recipes/${selectedRecipe}`} alt="Recipe" />
              <button className="close" onClick={handleClose}>✕</button>
              </section>

              <section className="modal-info">
              <button className="play">Open Recipe</button>
              <button className="save-recipe" onClick={() => saveRecipe(selectedRecipe)} style={{display: isSaved(selectedRecipe.id)? "none" : "inline-block"}}>╋</button>
              <button className="remove-recipe" onClick={() => removeRecipe(selectedRecipe.id)} style={{display: isSaved(selectedRecipe.id)? "inline-block" : "none"}}>✓</button>
              <h1>{selectedRecipe.name}</h1>
              <p>{selectedRecipe.ingredients}</p>
              <p>{selectedRecipe.instructions}</p>
              </section>

            </section>
            </section>
          )}
        </Fragment>
    ))}
    </section>
  );
}

export default RecipeList;