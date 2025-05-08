import React, { Fragment } from "react";

import YourRecipes from "../Pages/YourRecipes";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import X from "../Images/X.png";
import "../Styles/MealPlanner.css";

function MealPlanner() {

  return (
    <Fragment>
      <main className="meal-planner-page">
      <header className="header"><nav><Navbar /></nav></header>

      <aside className="grid-sidebar">
      <section>
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section>
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section>
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section>
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section>
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section>
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>
    </aside>

      <section className="content">
      </section>
      <Footer />
      </main>
    </Fragment>
  );
}

export default MealPlanner;