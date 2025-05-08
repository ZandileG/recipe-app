import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "../Styles/YourRecipes.css";

function YourRecipes() {


  return (
    <Fragment>
    <main className="your-recipes-page">

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

export default YourRecipes;