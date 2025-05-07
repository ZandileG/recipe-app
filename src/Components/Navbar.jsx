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
      <nav className="navbar">
       <img src={Logo} className="logo" alt="Zandile's Recipes" /> 
      <button onClick={handleLogOut}>Log Out</button>
      </nav>
    </Fragment>
  );
}

export default Navbar;