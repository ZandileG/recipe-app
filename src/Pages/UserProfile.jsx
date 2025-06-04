import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import { LoginContext } from "../Context/LoginContext";

import UserImage from "../Images/User Icon.webp";
import CreateIcon from "../Images/Create.png";
import CreateIcon2 from "../Images/Create2.png";
import SavedIcon from "../Images/Save.png";
import SavedIcon2 from "../Images/Save2.png";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Close from "../Images/Close.png";
import "../Styles/UserProfile.css";

function UserProfile(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 1200);
  
  const {setUserDetails} = useContext(LoginContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

 const [userImage, setUserImage] = useState(() => {
    return localStorage.getItem("userImage") || "";
  });

  useEffect(() => {
    if (userImage){
      localStorage.setItem("userImage", userImage);
    }
  }, [userImage]);

  function handleImageChange(e){
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

function createRecipe(){
    navigate("/create-recipe");
  }

function mealPlanner(){
    navigate("/meal-planner");
  }

useEffect(() => {
  function handleResize() {
    if (window.innerWidth <= 1200) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  return () => window.removeEventListener("resize", handleResize);
}, []);

function openSidebar(){
    setIsOpen(true);
  }

function closeSidebar(){
    setIsOpen(false);
  }

function handleSubmit(e){
    e.preventDefault();

    if (username.trim() === "" || password.trim() === ""){
      alert("Please fill in all fields.");
      return;
    }

  //The user can change their username or password
    const updatedDetails = { username, password };
    setUserDetails(updatedDetails);
    localStorage.setItem("userDetails", JSON.stringify(updatedDetails)); 

//After saving their new details, they will be logged out and they have to log back in with their new details
  localStorage.removeItem("isLoggedIn");
  alert("You have successfully updated your details! Please log in again.");
  setUsername("");
  setPassword("");
  navigate("/");
}

  return (
    <main className={`user-profile-page ${isOpen ? "with-sidebar" : "full-width"}`}>
    <header className={`header ${theme}`}><nav><Navbar isOpen={isOpen} openSidebar={openSidebar} /></nav></header>

    <aside className={`sidebar ${theme} ${isOpen ? "inline-block" : "hidden"}`}>
    <section className="sidebar">
  
            <button type="button" className={`close ${isOpen ? "inline-block" : "hidden"}`} onClick={e => {
            e.stopPropagation();
            closeSidebar();
            }}>
      <img src={Close} alt="Close" /></button>
      
      <label htmlFor="user-image-upload">
      <img src={userImage || UserImage} alt="User" className={`user-image1 ${theme}`} />
      </label>
      <input id="user-image-upload" type="file" accept="image/*" onChange={handleImageChange} />      
          
    </section>

    <form onSubmit={handleSubmit}>
      <input className={`username-change ${theme}`} type="text" placeholder="Change Username" 
              onChange={(e) => setUsername(e.target.value)} value={username}/>

      <input className={`password-change ${theme}`} type="password" placeholder="Change Password" 
              onChange={(e) => setPassword(e.target.value)} value={password}/>

        <button type="submit" className={`save-change ${theme}`}>Save</button>
    </form>

    <button type="button" className={`dark-mode ${theme}`} onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
    </aside>
    
    <section className={`content ${theme}`}>
    <h1 className={`page-heading ${theme}`}>User Profile</h1>

    <section className="tabs">
    <section className={`tab ${theme}`} onClick={createRecipe}>
    <section className="tab1"><img className={`create-icon ${theme}`} src={CreateIcon} alt="Create" /></section>
    <section className="tab1"><img className={`create-icon2 ${theme}`} src={CreateIcon2} alt="Create" /></section>
    <section className={`tab2 ${theme}`}>Your Recipes</section>
    </section>

    <section className={`tab ${theme}`} onClick={mealPlanner}>
      <section className="tab1"><img className={`save-icon ${theme}`} src={SavedIcon} alt="Save" /></section>
      <section className="tab1"><img className={`save-icon2 ${theme}`} src={SavedIcon2} alt="Save" /></section>
      <section className={`tab2 ${theme}`}>Your Meal Plans</section>
      </section>
    </section>
    </section>
    <Footer />
    </main> 
  );
}

export default UserProfile;