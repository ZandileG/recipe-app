import React, { useState, useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { SavedContext } from "../Context/SavedContext";
import { ThemeContext } from '../Context/ThemeContext';

import RecipeCard from "../Components/RecipeCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Close from "../Images/Close.png";
import "../Styles/SavedRecipes.css";

function SavedRecipes({isSidebarOpen}) {
  const {theme} = useContext(ThemeContext);
  const { savedRecipes } = useContext(SavedContext);
  const [isOpen, setIsOpen] = useState(true);
  
  const navigate = useNavigate();

  function openRecipe(recipe) {
    navigate(`/recipe/${recipe.id}`);
  }

  function filterRecipes() {
      
  }

  function openSidebar(){
    setIsOpen(true);
  }

  function closeSidebar(){
    setIsOpen(false);
  }

  return (
    <main className={`saved-recipes-page ${isOpen ? "with-sidebar" : "full-width"}`}>
    <header className={`header ${theme}`}><nav><Navbar isOpen={isOpen} openSidebar={openSidebar} /></nav></header>

    <aside className={`sidebar ${theme} ${isOpen ? "inline-block" : "hidden"}`}>
    <section className="sidebar">
      <button type="button" className={`close ${isOpen ? "inline-block" : "hidden"}`} onClick={e => {
            e.stopPropagation();
            closeSidebar();
            }}>
      <img src={Close} alt="Close" /></button>
   </section>

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

{/*This displays the user's saved recipes*/}
  <section className={`recipe-list ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
      {savedRecipes.length > 0 ? (
            savedRecipes.map((recipe) => (
              <section key={recipe.id} onClick={() => openRecipe(recipe)}>
                <RecipeCard recipe={recipe} />
              </section>
            ))
          ) : (
            <Fragment>
            <p className={`nothing ${theme}`}>You have no saved recipes.</p>
            </Fragment>
          )}
        </section>
      </section>
    
    <Footer />
     </main> 
  );
}

export default SavedRecipes;