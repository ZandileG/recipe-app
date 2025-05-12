import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import UserImage from "../Images/User Icon.png";
import CreateIcon from "../Images/Create.png";
import SavedIcon from "../Images/Save.png";
import "../Styles/UserProfile.css";

function UserProfile() {
  const navigate = useNavigate();

function createRecipe(){
    navigate("/create-recipe");
  }

function savedRecipes(){
    navigate("/saved-recipes");
  }

function darkMode(){

}

  return (
    <Fragment>
    <main className="user-profile-page">

    <header className="header"><nav><Navbar /></nav></header>

    <aside className="sidebar">
    <section>
      <img src={UserImage} alt="User" className="user-image" />
    </section>

    <form action="">
      <input className="username-change" type="text" placeholder="Change Username"/>
      <input className="password-change" type="password" placeholder="Change Password"/>
      <p className="update-message">Your details have been successfully updated!</p>
        <button type="submit" className="save-change">Save</button>
    </form>

    <button type="submit" className="dark-mode" onClick={darkMode}>Dark Mode</button>
    </aside>
    
    <section className="content">
    <h1 className="page-heading">User Profile</h1>

    <section className="tabs">
    <section className="tab" onClick={createRecipe}>
    <section className="tab1"><img className="create-icon" src={CreateIcon} alt="Create" /></section>
    <section className="tab2">Your Recipes</section>
    </section>

    <section className="tab" onClick={savedRecipes}>
      <section className="tab1"><img className="save-icon" src={SavedIcon} alt="Save" /></section>
      <section className="tab2">Saved Recipes</section>
      </section>
    </section>
    </section>
    <Footer />
    </main> 
    </Fragment>
  );
}

export default UserProfile;