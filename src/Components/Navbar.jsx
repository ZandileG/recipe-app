import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../Images/Logo.webp";

function Navbar() {
    const navigate = useNavigate();
  
    function handleLogOut(){
      navigate("/login");
    }

  return (
    <Fragment>
      <header><nav>
      <section><img src={Logo} className="logo-navbar" alt="Zandile's Recipes" /></section>
      <ul>
        <li>Home</li>
        <li>Meal Planner</li>
        <li>User Profile</li>
      </ul>
      <button className="logout" onClick={handleLogOut}>Log Out</button>
      </nav></header>
    </Fragment>
  );
}

export default Navbar;