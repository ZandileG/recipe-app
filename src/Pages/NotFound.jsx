import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Sorry from "../Images/Sorry.gif";
import "../App.css"

function NotFound() {
  const navigate = useNavigate();

  function home(){
    navigate("/");
  }

  return (
    <Fragment>
      <main className="not-found-page">
        <img src={Sorry} alt="Sorry" />
        <h1>Page Not found!</h1>

        <button type="button" className="back-home" onClick={home}>Home</button>
      </main>
    </Fragment>
  );
}

export default NotFound;