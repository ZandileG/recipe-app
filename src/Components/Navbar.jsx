import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from '../Context/ThemeContext';

import UserImage from "../Images/User Icon.webp";
import Hamburger from "../Images/Hamburger.png";
import Logo from "../Images/Logo.webp";
import "../Styles/Navbar.css";

function Navbar({isOpen, openSidebar}) {
  const {theme} = useContext(ThemeContext);
  
    const navigate = useNavigate();
    const location = useLocation();

  //These are functions to navigate to different pages when the nav items are clicked
    function home() {
      navigate("/home");
    }
  
    function handleLogOut(){
      navigate("/");
    } 
    
    function mealPlanner() {
      navigate("/meal-planner");
    }
    
    function userProfile(){
      navigate("/user-profile");
    }

      function savedRecipes() {
    navigate("/saved-recipes");
  }

  function createRecipe() {
    navigate("/create-recipe");
  }

  return (
      <header>
      <nav>
      <section className="logo-section">
        <img src={Logo} className="logo-navbar" alt="Zandile's Recipes" />
      </section>

      <section className="navbar">
        {/*When the user is on a certain page, I will style the active nav item in a different colour*/}
        <section className={`nav-item1 ${theme}`} onClick={home}>Home</section>
        <section className={`nav-item2 ${theme} ${location.pathname === "/meal-planner" ? "active" : ""}`} onClick={mealPlanner}>Meal Planner</section>
        <section className={`nav-item3 ${theme} ${location.pathname === "/saved-recipes" ? "active" : ""}`} onClick={savedRecipes}>Saved Recipes</section>
        <section className={`nav-item4 ${theme} ${location.pathname === "/create-recipe" ? "active" : ""}`} onClick={createRecipe}>Create Recipe</section>
        
        <button className={`logout ${theme}`} onClick={handleLogOut}>Log Out</button>

        <section className="nav-item5">
        <button className={`user-profile-nav ${theme} ${location.pathname === "/user-profile" ? "active" : ""}`} type="button" onClick={userProfile}><img src={UserImage} alt="User" /></button>
         <button type="button" className={`hamburger ${isOpen ? "hidden" : "inline-block"}`} onClick={openSidebar}>
        <img src={Hamburger} alt="Hamburger" />
        </button>
        </section>
      </section>
      </nav>
      </header>
  );
}

export default Navbar;