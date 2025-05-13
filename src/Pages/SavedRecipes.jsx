import React, { useContext } from "react";
//import { SavedContext } from "../Context/SavedContext";
import { ThemeContext } from '../Context/ThemeContext';

//import RecipeList from "../Components/RecipeList";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Styles/SavedRecipes.css";

function SavedRecipes() {
  const {theme} = useContext(ThemeContext);
  
  function filterRecipes() {
      
  }

  return (
     <main className="saved-recipes-page">
    <header className={`header ${theme}`}><nav><Navbar /></nav></header>

    <aside className={`sidebar ${theme}`}>
   
    <h3 className="heading">Difficulty</h3>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Easy</button>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Medium</button>

    <h3 className="heading">Meal Type</h3>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Breakfast</button>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Lunch</button>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Dinner</button>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Dessert</button>

    <h3 className="heading">Other Categories</h3>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Appetizer</button>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Beverage</button>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Side Dish</button>
    <button className={`filter ${theme}`} type="button" onClick={filterRecipes}>Snack</button>
    </aside>

    <section className={`content ${theme}`}>
    <h1 className={`page-heading ${theme}`}>Saved Recipes</h1>
     {/* <RecipeList /> */}
     <p className={`nothing ${theme}`}>You have no saved recipes.</p>
    </section>
    
    <Footer />
     </main> 
  );
}

export default SavedRecipes;