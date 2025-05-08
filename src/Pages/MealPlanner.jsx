import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import YourRecipes from "../Pages/YourRecipes";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/MealPlanner.css";

function MealPlanner() {
  const navigate = useNavigate();

  function filterRecipes() {
      
  }

  return (
    <Fragment>
      <main className="meal-planner-page">
      <header className="header"><nav><Navbar /></nav></header>

    <aside className="sidebar">

    </aside>
    <section className="content">
    </section>
    <Footer />
      </main>
    </Fragment>
  );
}

export default MealPlanner;