import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Recipe.css";

function Recipe() {
const { recipeId } = useParams();

  return (
    <Fragment>
      <main className="recipe-page">
      <header className="header"><nav><Navbar /></nav></header>

      <section className="content">
        <section className="recipe-page-grid">
          <section className="grid-col1">
            <h1 className="page-heading1">Recipe Name</h1>
            <img src="" alt="" />
            
            <section className="in-line"><p className="in-line-heading">Difficulty: </p>
            <p></p>
            </section>

            <section className="in-line"><p className="in-line-heading">Servings: </p>
            <p></p>
            </section>

            <section className="in-line"><p className="in-line-heading">Prep Time: </p>
            <p></p>
            </section>

            <section className="in-line"><p className="in-line-heading">Cooking Time: </p>
            <p></p>
            </section>
          </section>

          <section className="grid-col2">
            <h2 className="page-heading2">Ingredients</h2>
            <ul className="info-p"></ul>
          </section>

          <section className="grid-col3">
            <h2 className="page-heading2">Instructions</h2>
            <ul className="info-p"></ul>
          </section>
        </section>
      </section>

      <Footer /> 
      </main>
    </Fragment>
  );
}

export default Recipe;