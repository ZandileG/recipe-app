import React, { Fragment } from "react";
import { SavedContext } from "../Context/SavedContext";

import RecipeList from "../Components/RecipeList";
import RecipeCard from "../Components/RecipeCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Styles/SavedRecipes.css";

function SavedRecipes() {
  function filterRecipes() {
      
  }

  return (
    <Fragment>
     <main className="saved-recipes-page">
     <header className="header"><nav><Navbar /></nav></header>

    <aside classNme="sidebar">
    <h3 className="heading1">Difficulty</h3>
    <button className="filter" type="button" onClick={filterRecipes}>Easy</button>
    <button className="filter" type="button" onClick={filterRecipes}>Medium</button>

    <h3 className="heading2">Meal Type</h3>
    <button className="filter" type="button" onClick={filterRecipes}>Breakfast</button>
    <button className="filter" type="button" onClick={filterRecipes}>Lunch</button>
    <button className="filter" type="button" onClick={filterRecipes}>Dinner</button>
    </aside>

    <section className="content"><RecipeList /></section>
    
    <Footer />
     </main> 
    </Fragment>
  );
}

export default SavedRecipes;