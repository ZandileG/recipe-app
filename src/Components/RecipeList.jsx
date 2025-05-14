import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { SavedContext } from "../Context/SavedContext";

import RecipeCard from "./RecipeCard";
import "../Styles/RecipeCard.css";

import Save from "../Images/Icon.webp";
import Delete from "../Images/Delete.png";

function RecipeList({ searchQuery }) {
  const navigate = useNavigate();
  
  const { saveRecipe, removeRecipe, isSaved } = useContext(SavedContext);

  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(0); 
  
  function openRecipe(recipe) {
    navigate(`/recipe/${recipe.id}`);
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

/*useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []); */

//This is a debounced function that will save processing power
    const timeOutFunction = setTimeout(() => {
    fetchRecipes();
  }, 1000);

  return() => {
    clearTimeout(timeOutFunction);
  }
  }, [searchQuery, page]);

  return (
    <section className="recipe-list">
      {recipes.map((recipe) => (
        <section key={recipe.id} onClick={() => openRecipe(recipe)}>
          <RecipeCard recipe={recipe} />
        </section>
      ))}

      {/* Pagination Button */}
      <section style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="next-button"
          onClick={() => setPage((prev) => prev + 1)} disabled={!hasMore}>

        </button>
      </section>
    </section>
  );
}

export default RecipeList;
