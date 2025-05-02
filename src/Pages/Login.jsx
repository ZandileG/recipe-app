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
        setError("Incorrect username or password. Please try again.");
      }
    }

  return (
    <Fragment className="login">
      <img src={Backdrop} alt="Backdrop" />
    
    <p>Welcome to Zandile's Recipes!</p>

    <form action="" onSubmit={handleSubmit}>
    <h1>Sign In</h1>
    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
    <button type="submit">Enter</button>
    </form>
    {error && <p className="error">{error}</p>}
    </Fragment>
  );
}

export default Login;