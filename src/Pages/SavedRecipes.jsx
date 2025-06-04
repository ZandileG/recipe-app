import React, { useState, useContext, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { SavedContext } from "../Context/SavedContext";
import { ThemeContext } from "../Context/ThemeContext";

import RecipeCard from "../Components/RecipeCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Close from "../Images/Close.png";
import "../Styles/SavedRecipes.css";

function SavedRecipes({isSidebarOpen}) {
  const {theme} = useContext(ThemeContext);
  const { savedRecipes } = useContext(SavedContext);
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 1200);
  
  const [difficulty, setDifficulty] = useState("");
  const [mealType, setMealType] = useState("");
  const navigate = useNavigate();

function openRecipe(recipe){
    navigate(`/recipe/${recipe.id}`);
  }

function filterDifficulty(diff){
  setDifficulty(diff);
}

function filterMealType(type){
  setMealType(type);
}

//This filters the saved recipes based on selected difficulty and meal type
const filteredRecipes = savedRecipes.filter(recipe => {
  let matches = true;
  if (difficulty){
    matches = matches && recipe.difficulty === difficulty;
  }

//Checks if the mealType is a string or an array
  if (mealType){
    matches = matches && recipe.mealType?.includes(mealType);
  }
  return matches;
});

useEffect(() => {
  function handleResize() {
    if (window.innerWidth <= 1200) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  return () => window.removeEventListener("resize", handleResize);
}, []);

  function openSidebar(){
    setIsOpen(true);
  }

  function closeSidebar(){
    setIsOpen(false);
  }

  function reloadFilter(){
  setDifficulty("");
  setMealType("");
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

    <h2 className="heading">Filters</h2>
    <button className={`filter ${theme}`} type="button" onClick={reloadFilter}>Reload</button>

    <h3 className="heading">Difficulty</h3>
     <button className={`filter ${theme}`} type="button" onClick={() => filterDifficulty("Easy")}>Easy</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterDifficulty("Medium")}>Medium</button>

    <h3 className="heading">Meal Type</h3>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Breakfast")}>Breakfast</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Lunch")}>Lunch</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Dinner")}>Dinner</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Dessert")}>Dessert</button>

    <h3 className="heading">Other Categories</h3>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Appetizer")}>Appetizer</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Beverage")}>Beverage</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Side Dish")}>Side Dish</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Snack")}>Snack</button>
    </aside>

    <section className={`content ${theme}`}>
    <h1 className={`page-heading ${theme}`}>Saved Recipes</h1>

{/*This displays the user's saved recipes*/}
  <section className={`recipe-list ${isOpen ? "with-sidebar" : "full-width"}`}>
      {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
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