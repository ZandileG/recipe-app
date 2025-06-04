import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

import Logo from "../Images/Logo.webp";
import "../Styles/Login.css";

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //I want to track whether the user is new or not to change the sign up or login text
  const userExists = !!localStorage.getItem("userDetails");
  const [isSigningUp, setIsSigningUp] = useState(!userExists);
  const [changeDetails, setChangeDetails] = useState(false);

  const {login, signUp, setUserDetails} = useContext(LoginContext);
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();

  //The user gets an alert if they didn't fill in all the input fields
    if (username.trim() === "" || password.trim() === ""){
      alert("Please fill in all fields.");
      return;
    }

  //The user can change their username or password
    if (changeDetails){
      if(username && password){
        const updatedDetails ={username, password};
        setUserDetails(updatedDetails);
        localStorage.setItem("userDetails", JSON.stringify(updatedDetails)); 
        alert("You have successfully updated your details! Please re-enter them and log in.");
        setChangeDetails(false);
        setUsername("");
        setPassword("");
        return;
      }

  //The user can sign up and get a successful alert
    } else if (isSigningUp){
    if (signUp(username, password)){
      setUserDetails({ username, password });
      alert("You have successfully signed up! Please log in.");
      } 
      setIsSigningUp(true);
      navigate("/home");
     } else {
      
    //When they log back in, they will get an alert if they have entered incorrect details
      if (login(username, password)){
        navigate("/home");
      } else {
        alert("Incorrect username or password. Please try again.");
        setUsername("");
        setPassword("");
      }
    }
  }

  return (
    <main className="login-page">
    <section className="disappear">{/*This is an empty section I'm using so that the login page grid has two equal columns*/}</section>

    <section className="login-items">
    <img className="logo-login" src={Logo} alt="Zandile's Recipes"/>
    
    <form className="login-form" onSubmit={handleSubmit}>
    <h1 className="login-heading">{isSigningUp ? "Sign Up" : "Log In"}</h1>
    
    <section className="login-inputs">
    <input className="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
    <input className="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
    </section>

    {userExists && !isSigningUp && !changeDetails && (
    <p className="login-change" onClick={() => {setChangeDetails(true); 
       setUsername(""); 
       setPassword("");
    }}>Update Details</p>)}

    {/*The button will change from "Sign Up" to "Log In" if the user has previously signed up*/}
    <button type="submit" className="login-submit">{isSigningUp ? "Sign Up" : "Log In"}</button>
    </form>
    </section>
    </main>
  );
}

export default Login;