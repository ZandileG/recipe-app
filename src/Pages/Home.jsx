import React, { Fragment, useState } from "react";
import RecipeList from "../Components/RecipeList";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/Logo.webp";
import "../Styles/Home.css";

function Home() {
  const navigate = useNavigate();

  function filterRecipes() {
      
  }

  function handleLogOut(){
    navigate("/login");
  }

  return (
    <Fragment>
    <main className="home-page">
    <header className="header">
      <nav>
      <section><img src={Logo} className="logo-home" alt="Zandile's Recipes" /></section>
      <section className="navbar">
      <section><input className="searchbar" type="text" placeholder="Search..." /></section>
      <section><button className="logout" onClick={handleLogOut}>Log Out</button></section>
      </section>
      </nav>
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

export default Home;