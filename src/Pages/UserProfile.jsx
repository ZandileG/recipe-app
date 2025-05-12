import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import UserImage from "../Images/User Icon.png";
import "../Styles/UserProfile.css";

function UserProfile() {
  const navigate = useNavigate();

function yourRecipes(){
    navigate("/your-recipes");
  }

function savedRecipes(){
    navigate("/saved-recipes");
  }

  return (
    <Fragment>
    <main className="user-profile-page">

    <header className="header"><nav><Navbar /></nav></header>

    <aside className="sidebar">
    <section>
      <img src={UserImage} alt="User" className="user-image" />
    </section>

    </aside>
    
    <section className="content">
    <h1 className="page-heading">User Profile</h1>

    <section className="tabs">
    <section className="tab" onClick={yourRecipes}>Your Recipes</section>
    <section className="tab" onClick={savedRecipes}>Saved Recipes</section>
    </section>
    </section>
    <Footer />
    </main> 
    </Fragment>
  );
}

export default UserProfile;