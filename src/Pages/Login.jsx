import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import Backdrop from "../Images/Sign In BG.webp";
import "../Styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (login(username, password)){
      navigate("/");
      } else{
        setError("Your username or password are incorrect. Please try again.");
      }
    }

  return (
    <Fragment className="login-page">
      <img src={Backdrop} alt="Backdrop" />
    
    <p>Welcome to Zandile's Recipes!</p>

    <form className="login-form" action="" onSubmit={handleSubmit}>
    <h1>Sign In</h1>
    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
    <button type="login-submit">Enter</button>
    </form>
    {error && <p className="login-error">{error}</p>}
    </Fragment>
  );
}

export default Login;