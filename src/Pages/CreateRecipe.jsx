import React, { useContext, useState } from "react";
import { ThemeContext } from '../Context/ThemeContext';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Delete from "../Images/Delete.png";
import Close from "../Images/Close.png";
import "../Styles/CreateRecipe.css";

function CreateRecipe() {
const {theme} = useContext(ThemeContext);
const [isOpen, setIsOpen] = useState(true);

//This is a function that makes sure that the input box increases line by line as the user types
  function increaseBox(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

//When the user saves the form, the recipe appears on the sidebar and the recipe is added to the recipe list
function addRecipe(){

}

function closeSidebar(){
    setIsOpen(false);
  }

  return (
    <main className={`create-recipe-page ${isOpen ? "with-sidebar" : "full-width"}`}>
    <header className={`header ${theme}`}><nav><Navbar /></nav></header>

    <aside className={`aside ${theme} ${isOpen ? "inline-block" : "hidden"}`}>
    <section className="sidebar">
        <button type="button" className={`close ${isOpen ? "inline-block" : "hidden"}`} onClick={e => {
            e.stopPropagation();
            closeSidebar();
            }}>
      <img src={Close} alt="Close" /></button>
    </section>

    <h3 className="heading-center">Your Recipes</h3>
    
    <section className={`grid-sidebar ${theme}`}>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
      <button className="edit">Edit</button>
      </section>
      </section>
    </aside>

    <section className={`content ${theme}`}>
      <h1 className={`page-heading ${theme}`}>Create Recipe</h1>
      <form onSubmit={addRecipe} className={`create-recipe-form ${theme}`}>

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
      <section className="item2-1">
        <section>
        <label>Ingredient 1: </label>
        <input className={`item ${theme}`} type="text"/>
        </section>

        <section>
        <label>Ingredient 2: </label>
        <input className={`item ${theme}`} type="text"/>
        </section>

        <section>
        <label>Ingredient 3: </label>
        <input className={`item ${theme}`} type="text"/>
        </section>

        <section>
        <label>Ingredient 4: </label>
        <input className={`item ${theme}`} type="text"/>
        </section>

        <section>
        <label>Ingredient 5: </label>
        <input className={`item ${theme}`} type="text"/>
        </section>

         <section>
        <label>Ingredient 6: </label>
        <input className={`item ${theme}`} type="text"/>
        </section>

         <section>
        <label>Ingredient 7: </label>
        <input className={`item ${theme}`} type="text"/>
        </section>

         <section>
        <label>Ingredient 8: </label>
        <input className={`item ${theme}`} type="text"/>
        </section>
      </section>
      </section>

      <section className={`item3 ${theme}`}>
        <p className="form-heading">Enter your instructions</p>
        <textarea className={`large-input ${theme}`} onInput={increaseBox}></textarea>
        
        <section classNme="save-container">
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