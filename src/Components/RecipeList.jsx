import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import RecipeCard from "./RecipeCard";
import Back from "../Images/Arrow1.webp";
import Next from "../Images/Arrow2.webp";

import "../Styles/RecipeCard.css";

function RecipeList({ searchQuery }) {
  const navigate = useNavigate();
  
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

      setRecipes(data.recipes);
        
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

  return (
    <section className="recipe-list">
      {recipes.map((recipe) => (
        <section key={recipe.id} onClick={() => openRecipe(recipe)}>
        <RecipeCard recipe={recipe} />
        </section>
      ))}

      <section>{/*This is an empty section I'm using to center the pagination buttons*/}</section>      
      <section className="pagination">
        <button className="back-button" onClick={() => setPage((prev) => prev - 1)} disabled={page === 0}>
          <img src={Back} alt="Back"/>
        </button>

        <button className="next-button" onClick={() => setPage((prev) => prev + 1)} disabled={!hasMore}>
          <img src={Next} alt="Next" />
        </button>
      </section>
      <section>{/*Empty section*/}</section>      
      </section>
  );
}

export default RecipeList;
