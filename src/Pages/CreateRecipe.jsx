import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Add from "../Images/Add.png";
import UserRecipeImage from "../Images/Food.png";

import Delete from "../Images/Delete.png";
import Close from "../Images/Close.png";
import "../Styles/CreateRecipe.css";

function CreateRecipe() {
const {theme} = useContext(ThemeContext);
const [isOpen, setIsOpen] = useState(true);

//These are the ingridient inputs that are initially seen by the user
const [ingredientInputs, setIngredientInputs] = useState(8);

//When the user clicks the add button, 1 ingredient input is added to the form
 function addMoreIngredients(e){
    e.preventDefault();
    setIngredientInputs(prev => Math.min(prev + 1, 20));
  }

//These are the form's ingredient input fields they end at 20
const ingredientFields = [];
  for (let i = 1; i <= 20; i++) {
    ingredientFields.push(
      <section key={i} className={i <= ingredientInputs ? "" : "hidden-ingredient"}>
        <label>{`Ingredient ${i}: `}</label>
        <input className={`item ${theme}`} type="text"/>
      </section>
    );
  }

//This is a function that makes sure that the input box increases line by line as the user types
  function increaseBox(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

//When the user saves the form, the recipe appears on the sidebar
function saveYourRecipe() {
  alert("Your recipe was successfully saved!");
}

function openSidebar(){
    setIsOpen(true);
  }

function closeSidebar(){
    setIsOpen(false);
  }

//I want to allow the user to be able to upload an image for their recipe
 const [userRecipeImage, setUserRecipeImage] = useState(() => {
    return localStorage.getItem("userRecipeImage") || "";
  });

//This saves the uploaded image to localStorage
  useEffect(() => {
    if (userRecipeImage) {
      localStorage.setItem("userRecipeImage", userRecipeImage);
    }
  }, [userRecipeImage]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
    //FileReader allows the user to upload stuff from their device
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserRecipeImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <main className={`create-recipe-page ${isOpen ? "with-sidebar" : "full-width"}`}>
    <header className={`header ${theme}`}><nav><Navbar isOpen={isOpen} openSidebar={openSidebar} /></nav></header>

    <aside className={`aside ${theme} ${isOpen ? "inline-block" : "hidden"}`}>
    <section className="sidebar">
        <button type="button" className={`close ${isOpen ? "inline-block" : "hidden"}`} onClick={e => {
            e.stopPropagation();
            closeSidebar();
            }}>
      <img src={Close} alt="Close" /></button>
    </section>

    <h3 className="heading-center">Your Recipes</h3>
    <p className="bold">You have not created any recipes.</p>

    <section className={`grid-sidebar ${theme}`}>

    <section className={`slot ${theme}`}>
      <p className="your-recipe-name">Recipe Name</p>
      <button className="delete-btn"><img className="delete" src={Delete} alt="Delete" /></button>
      </section>
      </section>
    </aside>

    <section className={`content ${theme}`}>
      <h1 className={`page-heading ${theme}`}>Create Recipe</h1>

      <form onSubmit={saveYourRecipe} className={`create-recipe-form ${theme}`}>

          <section className={`grid-col1 ${theme}`}>
          <h3 className={`page-heading2 ${theme}`}>Recipe Name</h3>
          
          <label htmlFor="user-image-upload">
          <img src={userRecipeImage || UserRecipeImage} alt="Recipe" className="recipe-details-image2" />
          </label>
          <input id="user-image-upload" type="file" accept="image/*" onChange={handleImageChange} />      
          

          <section className={`in-line2 ${theme}`}>
          <section className={`item1-2 ${theme}`}>
          <label className="in-line-heading">No. of Servings: </label><input type="number"/>
          </section>
          </section>

          <section className={`in-line2 ${theme}`}>
          <section className={`item1-3 ${theme}`}>
          <label className="in-line-heading">Prep Time: </label><input type="time"/>
          </section>
          </section>

          <section className={`in-line2 ${theme}`}>
          <section className={`item1-4 ${theme}`}>
          <label className="in-line-heading">Cook Time: </label><input type="time"/>
          </section>
          </section>

          </section>

          <section className={`grid-col2 ${theme}`}>
          <h3 className={`page-heading2 ${theme}`}>Ingredients</h3>
          <section className="item2-1">{ingredientFields}
          <button className="add-ingredient" onClick={addMoreIngredients}><img src={Add} alt="Add" /></button>
          </section>

          
          </section>

          <section className={`grid-col3 ${theme}`}>
            <h3 className={`page-heading2 ${theme}`}>Instructions</h3>
            <ul className={`info-p ${theme}`}>
            <li><textarea className={`large-input ${theme}`} onInput={increaseBox}></textarea></li>  
            </ul>
            <section className="save-container">
          <button type="submit" className={`save-recipe ${theme}`}>Save</button>
          </section>
          </section>
      </form>
    </section>
    
    <Footer />
    </main>   
  );
}

export default CreateRecipe;