import React, { useContext } from "react";
import { ThemeContext } from '../Context/ThemeContext';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Delete from "../Images/Delete.png";
import Edit from "../Images/Edit.png";
import "../Styles/CreateRecipe.css";

function CreateRecipe() {
const {theme} = useContext(ThemeContext);

  function increaseBox(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <main className="create-recipe-page">

    <header className={`header ${theme}`}><nav><Navbar /></nav></header>

    <aside className={`grid-sidebar ${theme}`}>
    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
      <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>
    </aside>

    <section className={`content ${theme}`}>
      <h1 className="page-heading">Create Recipe</h1>
      <form action="" className={`create-recipe-form ${theme}`}>

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

      <section className="item2">
      <p className="form-heading-edit">Enter your ingredients</p>
      <section className="item2-1">
        <section className="item">
        <label>Ingredient 1: </label><input className={`item ${theme}`} type="text"/>
        </section>

        <section className="item">
        <label>Ingredient 2: </label><input className={`item ${theme}`} type="text"/>
        </section>

        <section className="item">
        <label>Ingredient 3: </label><input className={`item ${theme}`} type="text"/>
        </section>

        <section className="item">
        <label>Ingredient 4: </label><input className={`item ${theme}`} type="text"/>
        </section>

        <section className="item">
        <label>Ingredient 5: </label><input className={`item ${theme}`} type="text"/>
        </section>

         <section className="item">
        <label>Ingredient 6: </label><input className={`item ${theme}`} type="text"/>
        </section>

         <section className="item">
        <label>Ingredient 7: </label><input className={`item ${theme}`} type="text"/>
        </section>

         <section className="item">
        <label>Ingredient 8: </label><input className={`item ${theme}`} type="text"/>
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