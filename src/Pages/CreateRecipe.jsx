import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Add from "../Images/Add.png";

import Delete from "../Images/Delete.png";
import Close from "../Images/Close.png";
import "../Styles/CreateRecipe.css";

function CreateRecipe() {
const {theme} = useContext(ThemeContext);
const [isOpen, setIsOpen] = useState(true);

//These are the ingridient inputs that are initially seen by the user
const [ingredientInputs, setIngredientInputs] = useState(6);

//This is a function that makes sure that the input box increases line by line as the user types
  function increaseBox(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

//When the user clicks the add button, 2 ingredient inputs are added to the form
 function addMoreIngredients(e){
    e.preventDefault();
    setIngredientInputs(prev => Math.min(prev + 2, 20));
  }

//These are the form's ingredient input fields they end at 20
const ingredientFields = [];
  for (let i = 1; i <= 20; i++) {
    ingredientFields.push(
      <section key={i} className={i <= ingredientInputs ? "" : "hidden-ingredient"}>
        <label>{`Ingredient ${i}: `}</label>
        <input className={`item ${theme}`} type="text"/>
      </section>
    );
  }

//When the user saves the form, the recipe appears on the sidebar
function saveYourRecipe() {
  alert("Your recipe was successfully saved!");
}

function openSidebar(){
    setIsOpen(true);
  }

function closeSidebar(){
    setIsOpen(false);
  }

  return (
    <main className={`create-recipe-page ${isOpen ? "with-sidebar" : "full-width"}`}>
    <header className={`header ${theme}`}><nav><Navbar isOpen={isOpen} openSidebar={openSidebar} /></nav></header>

    <aside className={`aside ${theme} ${isOpen ? "inline-block" : "hidden"}`}>
    <section className="sidebar">
        <button type="button" className={`close ${isOpen ? "inline-block" : "hidden"}`} onClick={e => {
            e.stopPropagation();
            closeSidebar();
            }}>
      <img src={Close} alt="Close" /></button>
    </section>

    <h3 className="heading-center">Your Recipes</h3>
    <p className="bold">You have not created any recipes.</p>

    <section className={`grid-sidebar ${theme}`}>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <button className="delete-btn"><img className="delete" src={Delete} alt="Delete" /></button>
      </section>
      </section>
    </aside>

    <section className={`content ${theme}`}>
      <h1 className={`page-heading ${theme}`}>Create Recipe</h1>
      <form onSubmit={saveYourRecipe} className={`create-recipe-form ${theme}`}>

      <section className={`item1 ${theme}`}>
        <p className="form-heading">Enter your recipe information</p>

        <section className={`item1-1 ${theme}`}>
        <label>Difficulty: </label>
        <select name="difficulty" className={`difficulty-list ${theme}`}>
                  <option value="easy">Easy</option>
                  <option value="easy">Medium</option>
        </select>
        </section>

        <section className={`item1-2 ${theme}`}>
        <label>Servings: </label><input type="number"/>
        </section>

        <section className={`item1-3 ${theme}`}>
        <label>Prep Time: </label><input type="time"/>
        </section>

        <section className={`item1-4 ${theme}`}>
        <label>Cooking Time: </label><input type="time"/>
        </section>
        </section>

      <section className={`item2 ${theme}`}>
      <p className="form-heading-edit">Enter your ingredients</p>
      <section className="item2-1">{ingredientFields}</section>

      <button className="add-ingredient" onClick={addMoreIngredients}><img src={Add} alt="Add" /></button>
      </section>

      <section className={`item3 ${theme}`}>
        <p className="form-heading">Enter your instructions</p>
        <textarea className={`large-input ${theme}`} onInput={increaseBox}></textarea>
        
        <section className="save-container">
        <button type="submit" className={`save-recipe ${theme}`}>Save</button>
        </section>
      </section>
      
      </form>
    </section>
    
    <Footer />
    </main>   
  );
}

export default CreateRecipe;