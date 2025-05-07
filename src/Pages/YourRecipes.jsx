import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Styles/YourRecipes.css";

function YourRecipes() {
  function filterRecipes() {
      
  }

  return (
    <Fragment>
    <main className="your-recipes-page">
    <header className="header">
      <nav><Navbar /></nav>
    </header>

    <aside className="sidebar">
   
    <h3 className="heading1">Difficulty</h3>
    <button className="filter" onClick={filterRecipes}>Easy</button>
    <button className="filter" onClick={filterRecipes}>Medium</button>

    <h3 className="heading2">Meal Type</h3>
    <button className="filter" onClick={filterRecipes}>Breakfast</button>
    <button className="filter" onClick={filterRecipes}>Lunch</button>
    <button className="filter" onClick={filterRecipes}>Dinner</button>

    </aside>
    <section className="content">
    </section>
    <Footer />
    </main>   
    </Fragment>
  );
}

export default YourRecipes;