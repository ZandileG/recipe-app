import React from "react";
import { useNavigate } from "react-router-dom";

import Sorry from "../Images/Sorry.gif";
import "../App.css"

function NotFound() {
  const navigate = useNavigate();

//When the user enters an incorrect file path, they will land on this page
//They can then click on the Home button to get back to the app 
  function home(){
    navigate("/home");
  }

  return (
      <main className="not-found-page">
        <img src={Sorry} alt="Sorry" />
        <h1>Page Not found!</h1>

        <button type="button" className="back-home" onClick={home}>Home</button>
      </main>
  );
}

export default NotFound;