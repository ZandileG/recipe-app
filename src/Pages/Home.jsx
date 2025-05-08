import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import RecipeList from "../Components/RecipeList";
import Footer from "../Components/Footer";

import Logo from "../Images/Logo.webp";
import Indicator from "../Images/Indicator.webp";
import "../Styles/Home.css";

function Home() {
  const navigate = useNavigate();

  function filterRecipes() {
      
  }

  function handleLogOut(){
    navigate("/login");
  }

  function userProfile() {
    navigate("/userprofile");
  }

  function mealPlanner() {
    navigate("/mealplanner");
  }

  return (
    <Fragment>
    <main className="home-page">
    <header className="header">
    <nav>
      <section><img src={Logo} className="logo-home" alt="Zandile's Recipes" /></section>
      
      <section className="navbar-home">
      <section><input className="searchbar" type="text" placeholder="Search..." /></section>
      <section><button className="logout" onClick={handleLogOut}>Log Out</button></section>
      </section>
    </nav>
    </header>

    <aside>
    <section className="sidebar-item" onClick={userProfile}>
      User Profile
    <section className="indicator-section">
      <img onClick={userProfile} src={Indicator} className="indicator" alt="Indicator" />
    </section>

    </section>
    <section className="sidebar-item" onClick={mealPlanner}>
      Meal Planner
    <section className="indicator-section">
        <img onClick={mealPlanner} src={Indicator} className="indicator" alt="Indicator" />
    </section>
    </section>

    <h3 className="heading1">Difficulty</h3>
    <button className="filter" onClick={filterRecipes}>Easy</button>
    <button className="filter" onClick={filterRecipes}>Medium</button>

    <h3 className="heading2">Meal Type</h3>
    <button className="filter" onClick={filterRecipes}>Breakfast</button>
    <button className="filter" onClick={filterRecipes}>Lunch</button>
    <button className="filter" onClick={filterRecipes}>Dinner</button>
    </aside>

    <section className="content"><RecipeList /></section>
    <Footer />
    </main> 
    </Fragment>
  );
}

export default Home;