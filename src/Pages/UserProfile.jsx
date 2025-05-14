import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { LoginContext } from "../Context/LoginContext";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import UserImage from "../Images/User Icon.png";
import UserImage2 from "../Images/User Icon Dark.png";
import CreateIcon from "../Images/Create.png";
import CreateIcon2 from "../Images/Create2.png";

import SavedIcon from "../Images/Save.png";
import SavedIcon2 from "../Images/Save2.png";
import "../Styles/UserProfile.css";

function UserProfile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUserDetails} = useContext(LoginContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

function createRecipe(){
    navigate("/create-recipe");
  }

function savedRecipes(){
    navigate("/saved-recipes");
  }

function handleSubmit(e) {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

  //The user can change their username or password
    const updatedDetails = { username, password };
    setUserDetails(updatedDetails);
    localStorage.setItem("userDetails", JSON.stringify(updatedDetails)); 

//The user will be logged out and they have to log back in with their new details
  localStorage.removeItem("isLoggedIn");
  alert("You have successfully updated your details! Please log in again.");
  
  setUsername("");
  setPassword("");
  
  navigate("/login");
  }

  return (
    <main className="user-profile-page">

    <header className={`header ${theme}`}><nav><Navbar /></nav></header>

    <aside className={`sidebar ${theme}`}>
    <section>
      <img src={UserImage} alt="User" className={`user-image1 ${theme}`}  />
      <img src={UserImage2} alt="User" className={`user-image2 ${theme}`}  />
    </section>

    <form onSubmit={handleSubmit}>
      <input className={`username-change ${theme}`} type="text" placeholder="Change Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
      <input className={`password-change ${theme}`} type="password" placeholder="Change Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      <p className={`update-message ${theme}`}>Your details have been successfully updated!</p>
        <button type="submit" className={`save-change ${theme}`}>Save</button>
    </form>

    <button type="button" className={`dark-mode ${theme}`} onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
    </aside>
    
    <section className={`content ${theme}`}>
    <h1 className={`page-heading ${theme}`}>User Profile</h1>

    <section className="tabs">
    <section className={`tab ${theme}`} onClick={createRecipe}>
    <section className="tab1"><img className={`create-icon ${theme}`} src={CreateIcon} alt="Create" /></section>
    <section className="tab1"><img className={`create-icon2 ${theme}`} src={CreateIcon2} alt="Create" /></section>
    <section className={`tab2 ${theme}`}>Your Recipes</section>
    </section>

    <section className={`tab ${theme}`} onClick={savedRecipes}>
      <section className="tab1"><img className={`save-icon ${theme}`} src={SavedIcon} alt="Save" /></section>
      <section className="tab1"><img className={`save-icon2 ${theme}`} src={SavedIcon2} alt="Save" /></section>
      <section className={`tab2 ${theme}`}>Saved Recipes</section>
      </section>
    </section>
    </section>
    <Footer />
    </main> 
  );
}

export default UserProfile;