import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from '../Context/ThemeContext';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Close from "../Images/Close.png";

import axios from "axios";
import "../Styles/Recipe.css";

function Recipe() {
const { id } = useParams();
const {theme} = useContext(ThemeContext);
const [recipe, setRecipe] = useState(null);

useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

//This is just a way to give the user feedback if it takes long for the data to load
  if (!recipe) return <p>Loading...</p>;

  return (
    <main className="recipe-page">
    <header className={`header ${theme}`}><nav><Navbar /></nav></header>

    <section className={`content ${theme}`}>
        <section className={`recipe-page-grid ${theme}`}>
          <section className={`grid-col1 ${theme}`}>
            <h1 className={`page-heading1 ${theme}`}>{recipe.name}</h1>
            <img src={recipe.image} alt="Recipe" />
            
            <section className={`in-line ${theme}`}><p className="in-line-heading">Difficulty: </p>
            <p>{recipe.difficulty}</p>
            </section>

            <section className={`in-line ${theme}`}><p className="in-line-heading">Servings: </p>
            <p>{recipe.servings}</p>
            </section>

            <section className={`in-line ${theme}`}><p className="in-line-heading">Prep Time: </p>
            <p>{recipe.prepTimeMinutes} Minutes</p>
            </section>

            <section className={`in-line ${theme}`}><p className="in-line-heading">Cooking Time: </p>
            <p>{recipe.cookTimeMinutes} Minutes</p>
            </section>
          </section>

          <section className={`grid-col2 ${theme}`}>
            <h2 className={`page-heading2 ${theme}`}>Ingredients</h2>
            <ul className={`info-p  ${theme}`}>
            </ul>
          </section>

          <section className={`grid-col3 ${theme}`}>
            <h2 className={`page-heading2 ${theme}`}>Instructions</h2>
            <ul className={`info-p  ${theme}`}></ul>
          </section>
        </section>
      </section>

      <Footer /> 
      </main>
  );
}

export default Recipe;