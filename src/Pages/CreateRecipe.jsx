import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Delete from "../Images/Delete.png";
import Edit from "../Images/Edit.png";
import "../Styles/CreateRecipe.css";

function CreateRecipe() {

  function increaseBox(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <Fragment>
    <main className="create-recipe-page">

    <header className="header"><nav><Navbar /></nav></header>

    <aside className="grid-sidebar">
    <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
      <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="slot">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>
    </aside>

    <section className="content">
      <h1 className="page-heading">Create Recipe</h1>
      <form action="" className="create-recipe-form">

      <section className="item1">
        <p className="form-heading">Enter your recipe information</p>
        <section className="item1-1">
        <label>Difficulty: </label>
        <select name="difficulty" className="difficulty-list">
                  <option value="easy">Easy</option>
                  <option value="easy">Medium</option>
        </select>
        </section>

        <section className="item1-2">
        <label>Servings: </label><input type="number"/>
        </section>

        <section className="item1-3">
        <label>Prep Time: </label><input type="time"/>
        </section>

        <section className="item1-4">
        <label>Cooking Time: </label><input type="time"/>
        </section>
        </section>

      <section className="item2">
      <p className="form-heading-edit">Enter your ingredients</p>
      <section className="item2-1">
        <section className="item">
        <label>Ingredient 1: </label><input type="text"/>
        </section>

        <section className="item">
        <label>Ingredient 2: </label><input type="text"/>
        </section>

        <section className="item">
        <label>Ingredient 3: </label><input type="text"/>
        </section>

        <section className="item">
        <label>Ingredient 4: </label><input type="text"/>
        </section>

        <section className="item">
        <label>Ingredient 5: </label><input type="text"/>
        </section>

         <section className="item">
        <label>Ingredient 6: </label><input type="text"/>
        </section>

         <section className="item">
        <label>Ingredient 7: </label><input type="text"/>
        </section>

         <section className="item">
        <label>Ingredient 8: </label><input type="text"/>
        </section>
      </section>
      </section>

      <section className="item3">
        <p className="form-heading">Enter your instructions</p>
        <textarea className="large-input" onInput={increaseBox}></textarea>
        <section classNme="save-container">
        <button type="submit" className="save-recipe">Save</button>
        </section>
      </section>
      </form>
    </section>
    
    <Footer />
    </main>   
    </Fragment>
  );
}

export default CreateRecipe;