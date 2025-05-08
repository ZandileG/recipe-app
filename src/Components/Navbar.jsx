import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../Images/Logo.webp";

function Navbar() {
    const navigate = useNavigate();
  
    function handleLogOut(){
      navigate("/login");
    } 
    
    function home() {
      navigate("/");
    }
  
    function mealPlanner() {
      navigate("/mealplanner");
    }
  
    
    function userProfile(){
      navigate("/userProfile");
    }

  return (
    <Fragment>
      <header>
      <nav>
      <section><img src={Logo} className="logo-navbar" alt="Zandile's Recipes" /></section>

      <section className="navbar">
        <section className="nav-item" onClick={home}>Home</section>
        <section className="nav-item" onClick={mealPlanner}>Meal Planner</section>
        <section className="nav-item" onClick={userProfile}>User Profile</section>

      <section className="logout-section">
        <button className="logout" onClick={handleLogOut}>Log Out</button>
      </section>
      </section>
      </nav>
      </header>
    </Fragment>
  );
}

export default Navbar;