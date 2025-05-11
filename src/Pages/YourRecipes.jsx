import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Delete from "../Images/Delete.png";
import Edit from "../Images/Edit.png";
import "../Styles/YourRecipes.css";

function YourRecipes() {

  function increaseBox(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "rem";
  }

  return (
    <Fragment>
    <main className="your-recipes-page">

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
    </aside>

    <section className="content">
      <form action="" className="your-recipes-form">
      <section className="item1">
        <p className="form-heading">Type your recipe information</p>
        <section className="item1-1">
        <label>Difficulty: </label><input type="text"/>
        </section>

        <section className="item1-2">
        <label>Servings: </label><input type="text"/>
        </section>

        <section className="item1-3">
        <label>Prep Time: </label><input type="text"/>
        </section>

        <section className="item1-4">
        <label>Cooking Time: </label><input type="text"/>
        </section>
        </section>

      <section classNme="item2">
        <p className="form-heading">Type your ingredients</p>
        <textarea className="large-input" onInput={increaseBox}></textarea>
      </section>

      <section className="item3">
        <p className="form-heading">Type in your instructions</p>
        <textarea className="large-input" onInput={increaseBox}></textarea>
      </section>
      <button type="submit" className="save-recipe">Save</button>
      </form>
    </section>
    
    <Footer />
    </main>   
    </Fragment>
  );
}

export default YourRecipes;