import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

import RecipeList from "../Components/RecipeList";
import Footer from "../Components/Footer";

import DefaultUserImage from "../Images/User Icon.png";
import Hamburger from "../Images/Hamburger.png";
import Close from "../Images/Close.png";
import Logo from "../Images/Logo.webp";

import "../Styles/Home.css";

function Home(){
  const navigate = useNavigate();
  const {theme} = useContext(ThemeContext);

const [searchQuery, setSearchQuery] = useState("");

//The sidebar will be seen by default then it will be closed when the screen size is less than 1200px
const [isOpen, setIsOpen] = useState(() => window.innerWidth > 1200);
const [difficulty, setDifficulty] = useState("");
const [mealType, setMealType] = useState("");

useEffect(() => {
  function handleResize() {
    if (window.innerWidth <= 1200) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  window.addEventListener("resize", handleResize);
  handleResize();

  return () => window.removeEventListener("resize", handleResize);
}, []);

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

function handleSearch(e){
  setSearchQuery(e.target.value);
}

//This is a function for filtering the recipes according to tags, difficulty and meal types
 function filterDifficulty(diff){
  setDifficulty(diff);
}

function filterMealType(type){
  setMealType(type);
}

  function handleLogOut(){
    navigate("/");
  }

  function userProfile(){
    navigate("/user-profile");
  }

  function savedRecipes(){
    navigate("/saved-recipes");
  }

  function mealPlanner(){
    navigate("/meal-planner");
  }

  function createRecipe(){
    navigate("/create-recipe");
  }

  function closeSidebar(){
    setIsOpen(false);
  }

  function openSidebar(){
    setIsOpen(true);
  }

  return (
    <main className={`home-page ${isOpen ? "with-sidebar" : "full-width"}`}>
    <header className={`header ${theme}`}>
    <nav>
      <section><img src={Logo} className="logo-home" alt="Zandile's Recipes" /></section>

      <section className="navbar-home">
      <section><input className={`searchbar ${theme}`} name="searchbar" type="search" placeholder="Search..." onChange={handleSearch}/></section>
      
      <section><button className={`logout-home ${theme}`} type="button" onClick={handleLogOut}>Log Out</button></section>
      <section><button className="user-profile" type="button" onClick={userProfile}><img src={userImage} alt="User" /></button></section>
      <button type="button" className={`hamburger-home ${isOpen ? "hidden" : "inline-block"}`} onClick={openSidebar}>
        <img src={Hamburger} alt="Hamburger" />
      </button>
      </section>
    </nav>
    </header>

    <aside className={`sidebar ${theme} ${isOpen ? "inline-block" : "hidden"}`}>
    <section className={`sidebar-item ${theme}`} onClick={savedRecipes}>
      <button type="button" className={`close ${isOpen ? "inline-block" : "hidden"}`} onClick={e => {
            e.stopPropagation();
            closeSidebar();
            }}>
      <img src={Close} alt="Close" /></button>
      Saved Recipes
    </section>

    <section className={`sidebar-item ${theme}`} onClick={mealPlanner}>
      Meal Planner
    </section>

     <section className={`sidebar-item ${theme}`} onClick={createRecipe}>
      Create Recipe    
    <section className="sidebar-item-hidden"></section>
    </section>

    <h3 className="heading">Difficulty</h3>
    <button className={`filter ${theme}`} type="button" onClick={() => filterDifficulty("Easy")}>Easy</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterDifficulty("Medium")}>Medium</button>

    <h3 className="heading">Meal Type</h3>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Breakfast")}>Breakfast</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Lunch")}>Lunch</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Dinner")}>Dinner</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Dessert")}>Dessert</button>

    <h3 className="heading">Other Categories</h3>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Appetizer")}>Appetizer</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Beverage")}>Beverage</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Side Dish")}>Side Dish</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Snack")}>Snack</button>
    </aside>

    <section className={`content ${theme}`}>
      <h1 className={`page-heading ${theme}`}>Recipes</h1>

      <RecipeList searchQuery={searchQuery} isSidebarOpen={isOpen} difficulty={difficulty} mealType={mealType} />
    </section>

    <Footer />
    </main> 
  );
}

export default Home;