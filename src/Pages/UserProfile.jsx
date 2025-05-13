import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import UserImage from "../Images/User Icon.png";
import CreateIcon from "../Images/Create.png";
import SavedIcon from "../Images/Save.png";
import "../Styles/UserProfile.css";

function UserProfile() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

function createRecipe(){
    navigate("/create-recipe");
  }

function savedRecipes(){
    navigate("/saved-recipes");
  }

  return (
    <main className="user-profile-page">

    <header className="header"><nav><Navbar /></nav></header>

    <aside className={`sidebar ${theme}`}>
    <section>
      <img src={UserImage} alt="User" className="user-image" />
    </section>

    <form action="">
      <input className={`username-change ${theme}`} type="text" placeholder="Change Username"/>
      <input className={`password-change ${theme}`} type="password" placeholder="Change Password"/>
      <p className={`update-message ${theme}`}>Your details have been successfully updated!</p>
        <button type="submit" className={`save-change ${theme}`}>Save</button>
    </form>

    <button type="button" className={`dark-mode ${theme}`} onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
    </aside>
    
    <section className={`content ${theme}`}>
    <h1 className="page-heading">User Profile</h1>

    <section className="tabs">
    <section className={`tab ${theme}`} onClick={createRecipe}>
    <section className="tab1"><img className="create-icon" src={CreateIcon} alt="Create" /></section>
    <section className={`tab2 ${theme}`}>Your Recipes</section>
    </section>

    <section className={`tab ${theme}`} onClick={savedRecipes}>
      <section className="tab1"><img className="save-icon" src={SavedIcon} alt="Save" /></section>
      <section className={`tab2 ${theme}`}>Saved Recipes</section>
      </section>
    </section>
    </section>
    <Footer />
    </main> 
  );
}

export default UserProfile;