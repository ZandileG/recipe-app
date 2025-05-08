import React, {Fragment} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../Images/Logo.webp";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

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
      <section className="logo-section">
        <img src={Logo} className="logo-navbar" alt="Zandile's Recipes" />
      </section>

      <section className="navbar">
        {/*When the user is on a certain page, I will style the active nav item in a different colour*/}
        <section className={`nav-item1 ${location.pathname === "/" ? "active" : ""}`} onClick={home}>Home</section>
        <section className={`nav-item2 ${location.pathname === "/meal-planner" ? "active" : ""}`} onClick={mealPlanner}>Meal Planner</section>
        <section className={`nav-item3 ${location.pathname === "/user-profile" ? "active" : ""}`} onClick={userProfile}>User Profile</section>

        <button className="logout" onClick={handleLogOut}>Log Out</button>

      </section>
      </nav>
      </header>
    </Fragment>
  );
}

export default Navbar;