import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import "../Styles/Recipe.css";

function Recipe() {
const { recipeId } = useParams();

  return (
    <Fragment>
      <section className="recipe-page">
        
      </section>
    </Fragment>
  );
}

export default Recipe;