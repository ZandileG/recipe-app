import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

function NotFound(){
  const navigate = useNavigate();

/*When the user enters an incorrect file path, they will land on this page
  They can then click on the Home button to get back to the app*/
  function home(){
    navigate("/home");
  }

  return (
      <main className="not-found-page">
      <section>
        <section className="empty-404"></section>
        <h1>Page Not found!</h1>

        <button type="button" className="back-home" onClick={home}>Home</button>
      </section>
      </main>
  );
}

export default NotFound;