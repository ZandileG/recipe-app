import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import Backdrop from "../Images/Sign In BG.webp";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const {login, signUp} = useContext(LoginContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (isSigningUp) {
    if (signUp(username, password)) {
      alert("You have successfully signed up!");
      setIsSigningUp(true);
      } else{
        setError("Please try again.");
      }
     } else {
      if (login(username, password)) {
        navigate("/");
      } else {
        setError("Incorrect username or password. Please try again.");
      }
    }
  }

  return (
    <Fragment>
      <section className="login-page">
      <img src={Backdrop} alt="Backdrop" className="backdrop"/>
    
    <p>Welcome to Zandile's Recipes!</p>

    <form className="login-form" action="" onSubmit={handleSubmit}>
    <h1 className="login-heading">Sign In</h1>
    <input className="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
    <input className="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
    <button type="login-submit">{isSigningUp? "Sign Up" : "Log In"}</button>
    
    {error && <p className="login-error">{error}</p>}
    </form>
    </section>
    </Fragment>
  );
}

export default Login;