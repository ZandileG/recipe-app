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
        
      </section>

      <Footer /> 
      </main>
    </Fragment>
  );
}

export default Recipe;