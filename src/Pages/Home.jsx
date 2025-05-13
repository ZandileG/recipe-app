import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import RecipeList from "../Components/RecipeList";
import Footer from "../Components/Footer";

import Logo from "../Images/Logo.webp";
import Indicator from "../Images/Indicator.webp";
import UserImage from "../Images/User Icon.webp";
import "../Styles/Home.css";

function Home() {
  const navigate = useNavigate();

/*   const [search, setSearch] = useState("");

function handleSearch(e){
  setSearch(e.target.value);
  onSearch(e.target.value);
}*/

const [searchQuery, setSearchQuery] = useState("");

  function filterRecipes() {
      
  }

  function returnDefault(){
    
  }

  function handleLogOut(){
    navigate("/login");
  }

  function userProfile() {
    navigate("/user-profile");
  }

  function savedRecipes() {
    navigate("/saved-recipes");
  }

  function mealPlanner() {
    navigate("/meal-planner");
  }

  function createRecipe() {
    navigate("/create-recipe");
  }

  return (
    <main className="home-page">
    <header className="header">
    <nav>
      <section><img src={Logo} className="logo-home" alt="Zandile's Recipes" /></section>
      
      <section className="navbar-home">
      <section><input className="searchbar" type="search" placeholder="Search..." onSearch={setSearchQuery}/></section>
      <section><button className="logout-home" type="button" onClick={handleLogOut}>Log Out</button></section>
      <section><button className="user-profile" type="button" onClick={userProfile}><img src={UserImage} alt="User" /></button></section>
      </section>
    </nav>
    </header>

    <aside className="sidebar">
    <section className="sidebar-item" onClick={mealPlanner}>
      Meal Planner
    <section className="indicator-section">
        <img onClick={mealPlanner} src={Indicator} className="indicator" alt="Indicator" />
    </section>
    </section>

    <section className="sidebar-item" onClick={savedRecipes}>
      Saved Recipes
    <section className="indicator-section">
        <img onClick={savedRecipes} src={Indicator} className="indicator" alt="Indicator" />
    </section>
    </section>

     <section className="sidebar-item" onClick={createRecipe}>
      Create Recipe
    <section className="indicator-section">
        <img onClick={createRecipe} src={Indicator} className="indicator" alt="Indicator" />
    </section>
    </section>

    <h3 className="heading">Difficulty</h3>
    <button className="filter" type="button" onClick={filterRecipes}>Easy</button>
    <button className="filter" type="button" onClick={filterRecipes}>Medium</button>

    <h3 className="heading">Meal Type</h3>
    <button className="filter" type="button" onClick={filterRecipes}>Breakfast</button>
    <button className="filter" type="button" onClick={filterRecipes}>Lunch</button>
    <button className="filter" type="button" onClick={filterRecipes}>Dinner</button>
    <button className="filter" type="button" onClick={filterRecipes}>Dessert</button>

    <h3 className="heading">Other Categories</h3>
    <button className="filter" type="button" onClick={filterRecipes}>Appetizer</button>
    <button className="filter" type="button" onClick={filterRecipes}>Beverage</button>
    <button className="filter" type="button" onClick={filterRecipes}>Side Dish</button>
    <button className="filter" type="button" onClick={filterRecipes}>Snack</button>
    </aside>

    <section className="content">
      <h1 className="page-heading">Recipes</h1>
      <RecipeList searchQuery={searchQuery}/>
    </section>

    <Footer />
    </main> 
  );
}

export default Home;