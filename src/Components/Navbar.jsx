import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../Images/Logo.webp";

function Navbar() {
    const navigate = useNavigate();

    function home() {
      navigate("/");
    }
  
    function handleLogOut(){
      navigate("/login");
    } 
    
    function mealPlanner() {
      navigate("/meal-planner");
    }
    
    function userProfile(){
      navigate("/user-profile");
    }

  return (
    <Fragment>
      <header>
      <nav>
      <section>
        <img src={Logo} className="logo-navbar" alt="Zandile's Recipes" />
      </section>

      <section className="navbar">
        <section className="nav-item1" onClick={home}>Home</section>
        <section className="nav-item2" onClick={mealPlanner}>Meal Planner</section>
        <section className="nav-item3" onClick={userProfile}>User Profile</section>

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