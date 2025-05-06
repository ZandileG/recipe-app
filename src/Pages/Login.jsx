import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import Logo from "../Images/Logo.webp";

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
    <main className="login-page">
    <section className="login-items">
    <img className="logo" src={Logo} alt="Zandile's Recipes"/>
    
    <form className="login-form" action="" onSubmit={handleSubmit}>
    <h1 className="login-heading">Sign In</h1>
    
    <section className="login-inputs">
    <input className="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
    <input className="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
    {error && <p className="login-error">{error}</p>}
    </section>

    <button type="submit" className="login-submit">{isSigningUp ? "Sign Up" : "Log In"}</button>
    </form>
    </section>
    </main>
    </Fragment>
  );
}

export default Login;