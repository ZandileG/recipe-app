import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

import Save from "../Images/Icon.webp";
import Home from "../Images/Home.png";
import Exit from "../Images/Exit.jpg";
import Edit from "../Images/Edit.jpg";
import Plan from "../Images/Plan.png";
import DefaultUserImage from "../Images/User Icon.png";
import Hamburger from "../Images/Hamburger.png";
import Logo from "../Images/Logo.webp";
import "../Styles/Navbar.css";

function Navbar({isOpen, openSidebar}){
  const {theme} = useContext(ThemeContext);
  
  const navigate = useNavigate();
  const location = useLocation();

//The user's image that was uploaded in User Profile will be displayed in the navbar
  const [userImage, setUserImage] = useState(() => {
    return localStorage.getItem("userImage") || DefaultUserImage;
  });

 useEffect(() => {
    function handleStorageChange(){
      setUserImage(localStorage.getItem("userImage") || DefaultUserImage);
    }
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

//This updates image when the user changes it
  useEffect(() => {
    setUserImage(localStorage.getItem("userImage") || DefaultUserImage);
  }, []);

  //These are functions to navigate to different pages when the nav items are clicked
    function home(){
      navigate("/home");
    }
  
    function handleLogOut(){
      navigate("/");
    } 
    
    function mealPlanner(){
      navigate("/meal-planner");
    }
    
    function userProfile(){
      navigate("/user-profile");
    }

      function savedRecipes(){
    navigate("/saved-recipes");
  }

  function createRecipe(){
    navigate("/create-recipe");
  }

  return (
      <header className="nav-header">
      <nav>
      <section className="logo-section">
        <img src={Logo} className="logo-navbar" alt="Zandile's Recipes" />
      </section>

      <section className="navbar">
        {/*When the user is on a certain page, I will style the active nav item in a different colour*/}
        <section className={`nav-item1 ${theme}`} onClick={home}>Home</section>
        <section className={`nav-item1-1 ${theme}`} onClick={home}><img src={Home} alt="Home" /></section>
        <section className={`nav-item2 ${theme} ${location.pathname === "/saved-recipes" ? "active" : ""}`} onClick={savedRecipes}>Saved Recipes</section>
        <section className={`nav-item2-1 ${theme} ${location.pathname === "/saved-recipes" ? "active" : ""}`} onClick={savedRecipes}><img src={Save} alt="Saved Recipes" /></section>
        <section className={`nav-item3 ${theme} ${location.pathname === "/meal-planner" ? "active" : ""}`} onClick={mealPlanner}>Meal Planner</section>
        <section className={`nav-item3-1 ${theme} ${location.pathname === "/meal-planner" ? "active" : ""}`} onClick={mealPlanner}><img src={Plan} alt="Meal Planner" /></section>
        <section className={`nav-item4 ${theme} ${location.pathname === "/create-recipe" ? "active" : ""}`} onClick={createRecipe}>Create Recipe</section>
        <section className={`nav-item4-1 ${theme} ${location.pathname === "/create-recipe" ? "active" : ""}`} onClick={createRecipe}><img src={Edit} alt="Create Recipe" /></section>
        
        <button className={`logout ${theme}`} onClick={handleLogOut}>Log Out</button>
        <button className={`logout2 ${theme}`} onClick={handleLogOut}><img src={Exit} alt="Log Out" /></button>

        <section className="nav-item5">
        <button className={`user-profile-nav ${location.pathname === "/user-profile" ? "active" : ""}`} type="button" onClick={userProfile}><img src={userImage} alt="User" /></button>
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