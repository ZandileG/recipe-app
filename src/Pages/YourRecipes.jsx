import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Delete from "../Images/X.png";
import Edit from "../Images/Edit.png";
import "../Styles/YourRecipes.css";

function YourRecipes() {


  return (
    <Fragment>
    <main className="your-recipes-page">

    <header className="header"><nav><Navbar /></nav></header>

    <aside className="grid-sidebar">
    <section className="block">
      <img className="delete" src={Delete} alt="Delete" />
      <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>
    </aside>

    <section className="content">
      
    </section>
    
    <Footer />
    </main>   
    </Fragment>
  );
}

export default YourRecipes;