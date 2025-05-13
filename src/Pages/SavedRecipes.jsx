import React from "react";
import { SavedContext } from "../Context/SavedContext";

import RecipeList from "../Components/RecipeList";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Styles/SavedRecipes.css";

function SavedRecipes() {
  function filterRecipes() {
      
  }

  return (
     <main className="saved-recipes-page">
     <header className="header"><nav><Navbar /></nav></header>

    <aside classNme="sidebar">
    <h3 className="heading">Difficulty</h3>
    <button className="filter" type="button" onClick={filterRecipes}>Easy</button>
    <button className="filter" type="button" onClick={filterRecipes}>Medium</button>

    <h3 className="heading">Meal Type</h3>
    <button className="filter" type="button" onClick={filterRecipes}>Breakfast</button>
    <button className="filter" type="button" onClick={filterRecipes}>Lunch</button>
    <button className="filter" type="button" onClick={filterRecipes}>Dinner</button>
    <button className="filter" type="button" onClick={filterRecipes}>Dessert</button>

    <h3 className="heading">Other Categories</h3>
    <button className="filter" type="button" onClick={filterRecipes}>Appetizer</button>
    <button className="filter" type="button" onClick={filterRecipes}>Beverage</button>
    <button className="filter" type="button" onClick={filterRecipes}>Side Dish</button>
    <button className="filter" type="button" onClick={filterRecipes}>Snack</button>
    </aside>

    <section className="content">
    <h1 className="page-heading">Saved Recipes</h1>
     {/* <RecipeList /> */}
     <p className="nothing">You have no saved recipes.</p>
    </section>
    
    <Footer />
     </main> 
  );
}

export default SavedRecipes;