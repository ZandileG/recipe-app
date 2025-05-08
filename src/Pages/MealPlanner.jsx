import React, { Fragment } from "react";

import YourRecipes from "../Pages/YourRecipes";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/MealPlanner.css";

function MealPlanner() {

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