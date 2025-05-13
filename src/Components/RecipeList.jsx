import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { SavedContext } from "../Context/SavedContext";

import RecipeCard from "./RecipeCard";
import Recipe from "../Pages/Recipe";
import "../Styles/RecipeCard.css";

import Save from "../Images/Icon.webp";
import Delete from "../Images/Delete.png";

function RecipeList({ searchQuery }) {
  const navigate = useNavigate();
  const { saveRecipe, removeRecipe, isSaved } = useContext(SavedContext);

  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [page, setPage] = useState(0); 
  
  function openRecipe() {
    navigate(`/recipe/${selectedRecipe.id}`);
  }

/*This works together with the pagination button and checks if there is more data to display
  This is because my API limits me to 30 items so I want to know when I've reached the limit.*/
  const [hasMore, setHasMore] = useState(true);

//This is the number of recipes I want to see per page
  const limit = 6;

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const url = searchQuery ? `https://dummyjson.com/recipes/search?q=${searchQuery}&limit=${limit}&skip=${page * limit}`
                                : `https://dummyjson.com/recipes?limit=${limit}&skip=${page * limit}`;
        const { data } = await axios.get(url);

      //I want the search to work for all the recipes in the API not just the ones on the current page
        setRecipes((prevRecipes) => [...prevRecipes, ...data.recipes]);
        
      //The button will be disabled when the limit is reached
        setHasMore((page + 1) * limit < data.total); 
      } catch (error) {
        console.error(error);
      }
    }

//This is a debounced function that will save processing power
    const timeOutFunction = setTimeout(() => {
    fetchRecipes();
  }, 1000);

  return() => {
    clearTimeout(timeOutFunction);
  }
  }, [searchQuery, page]);

  function handleClose() {
    setFadeOut(true);
    setTimeout(() => {
      setSelectedRecipe(null);
      setFadeOut(false);
    }, 500);
  }

//I used the re-used the code from the Netflix exercise 
  return (
    <section className="recipe-list">
      {recipes.map((recipe) => (
        <section key={recipe.id}>

          <RecipeCard recipe={recipe} onSelect={() => setSelectedRecipe(selectedRecipe?.id === recipe.id ? null : recipe)} />
          
          {selectedRecipe?.id === recipe.id && (  
            <section className={`modal-overlay ${fadeOut ? "fade-out" : ""}`} onClick={handleClose}>
            
            <section className="modal-content" onClick={(e) => e.stopPropagation()}>
          
            <img className="modal-backdrop" src={selectedRecipe.image} alt="Recipe Background" />
            
            <button className="delete" onClick={handleClose}></button>

            <section className="modal-info">
            <button onClick={openRecipe} className="open-recipe">Open Recipe</button>
            
            <button className="save-recipe" onClick={() => saveRecipe(selectedRecipe)}
                    style={{
                      display: isSaved(selectedRecipe.id)
                        ? "none"
                        : "inline-block",
                    }}
                  >
                    <img className="save-shortcut" src={Save} alt="Save" />
                  </button>
                  <button
                    className="remove-recipe"
                    onClick={() => removeRecipe(selectedRecipe.id)}
                    style={{
                      display: isSaved(selectedRecipe.id)
                        ? "inline-block"
                        : "none",
                    }}
                  >
                          <img className="delete-shortcut" src={Delete} alt="Delete" />

                  </button>
                  <h1>{selectedRecipe.name}</h1>
                  <p><strong>Ingredients:</strong> {selectedRecipe.ingredients.join(", ")}</p>
                  <p>{selectedRecipe.instructions}</p>
                </section>
              </section>
            </section>
          )}
        </section>
      ))}

      {/* Pagination Button */}
      <section style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="next-button"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!hasMore}
        >
          Next 6 Recipes
        </button>
      </section>
    </section>
  );
}

export default RecipeList;
