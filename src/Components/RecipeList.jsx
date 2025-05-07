import React, {Fragment, useEffect, useState, useContext} from "react";
import { SavedContext } from "../Context/SavedContext";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import "../Styles/RecipeCard.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const {saveRecipe, removeRecipe, isSaved} = useContext(SavedContext);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRecipes(data.recipes || []);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <Fragment>
      <section className="recipe-list">
        
      </section>
    </Fragment>
  );
}

export default RecipeList;