import React, { Fragment, useState } from "react";
import RecipeList from "../Components/RecipeList";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Home.css";

function Home() {

  return (
    <Fragment>
    <main className="home-page">
    <Navbar />
    <section className="sidebar"></section>
    <section className="content">
    </section>
    <Footer />
    </main> 
    </Fragment>
  );
}

export default Home;