import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Add from "../Images/Add.png";
import UserRecipeImage from "../Images/Food.png";

import Delete from "../Images/Delete.png";
import Close from "../Images/Close.png";
import "../Styles/CreateRecipe.css";

function CreateRecipe(){
const {theme} = useContext(ThemeContext);
const [isOpen, setIsOpen] = useState(() => window.innerWidth > 1200);

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

//This is the template for the recipe form
 const emptyRecipe = {
    name: "",
    servings: "",
    prepTime: "00:00",
    cookTime: "00:00",
    ingredients: Array(7).fill(""),
    instructions: "",
    image: "",
  };

const [form, setForm] = useState({ ...emptyRecipe });

//This stores the user's recipes
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("userRecipes");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("userRecipes", JSON.stringify(recipes));
  }, [recipes]);

  //I want to allow the user to be able to upload an image for their recipe
  function handleImageChange(e){
    const file = e.target.files[0];
    if (file) {
    //FileReader allows the user to upload stuff from their device
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(f => ({ ...f, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleChange(e){
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleIngredientChange(i, value){
    setForm(f => {
      const newIngredients = [...f.ingredients];
      newIngredients[i] = value;
      return { ...f, ingredients: newIngredients };
    });
  }

//These are the ingridient inputs that are initially seen by the user
const [ingredientInputs, setIngredientInputs] = useState(7);

//When the user clicks the add button, 1 ingredient input is added to the form
 function addMoreIngredients(e){
    e.preventDefault();
    setIngredientInputs(prev => Math.min(prev + 1, 15));
     setForm(f => ({
      ...f,
      ingredients: [...f.ingredients, ""],
    }));
  }

//These are the form's ingredient input fields they end at 15
const ingredientFields = [];
  for (let i = 0; i <= 14; i++){
    ingredientFields.push(
      <section key={i} className={i <= ingredientInputs ? "" : "hidden-ingredient"}>
        <label>{`Ingredient ${i + 1}: `}</label>
        <input className={`item ${theme}`} type="text" value={form.ingredients[i] || ""}
               onChange={e => handleIngredientChange(i, e.target.value)} />      
      </section>
    );
  }

//When the user saves the form, the recipe appears on the sidebar
  function saveYourRecipe(e){
  //The user must enter a recipe name before saving
    e.preventDefault();
    if (!form.name.trim()){
      alert("Please enter a recipe name.");
      return;
    }
    setRecipes(prev => [...prev, form]);
    setForm({ ...emptyRecipe, ingredients: Array(8).fill("") });
    setIngredientInputs(8);
    alert("Your recipe was successfully saved!");
  }

//Load recipe into form
  function loadRecipe(i){
    const recipe = recipes[i];
    setForm({
      ...recipe,
      ingredients: [...recipe.ingredients, ...Array(20 - recipe.ingredients.length).fill("")]
    });
    setIngredientInputs(recipe.ingredients.length);
  }

//Delete recipe
  function deleteRecipe(index){
    setRecipes(prev => prev.filter((_, i) => i !== index));
    setForm({ ...emptyRecipe, ingredients: Array(8).fill("") });
    setIngredientInputs(8);
  }

//This is a function that makes sure that the input box increases line by line as the user types
  function increaseBox(e){
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

function openSidebar(){
    setIsOpen(true);
  }

function closeSidebar(){
    setIsOpen(false);
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
        {recipes.length === 0 ? (
          <p className="bold">You have not created any recipes.</p>
        ) : (
          <section className={`grid-sidebar ${theme}`}>
            {recipes.map((r, index) => (
              <section key={index} className={`slot ${theme}`} onClick={() => loadRecipe(index)}>
                <img src={r.image || UserRecipeImage} alt="Recipe" className={`recipe-details-image3 ${theme}`} />
                <button className="delete-btn" onClick={e => {
                      e.stopPropagation();
                      deleteRecipe(index);
                    }}>
                <img className="delete" src={Delete} alt="Delete" />
                </button>
               <section className={`your-recipe-name ${theme}`}><h4>{r.name}</h4></section>
              </section>
            ))}
          </section>
        )}
    </aside>

    <section className={`content ${theme}`}>
      <h1 className={`page-heading ${theme}`}>Create Recipe</h1>

      <form onSubmit={saveYourRecipe} className={`create-recipe-form ${theme}`}>

          <section className={`grid-col1 ${theme}`}>
          <section className={`page-heading2 ${theme}`}>
          <input type="text" name="name" className={`item ${theme}`}
                 value={form.name} onChange={handleChange}
                 placeholder="Enter Recipe Name" required />
          </section>
          
          <label htmlFor="user-image-upload">
          <img src={form.image || UserRecipeImage} alt="Recipe" className={`recipe-details-image2 ${theme}`} />
          </label>
          <input id="user-image-upload" type="file" accept="image/*" onChange={handleImageChange} />      
          

          <section className={`in-line3 ${theme}`}>
          <section className={`item1-2 ${theme}`}>
          <label className={`in-line-heading ${theme}`}>Number of Servings: </label>
          <input type="number" min={1} name="servings" className={`item ${theme}`} value={form.servings} onChange={handleChange} />
          </section>
          </section>

          <section className={`in-line3 ${theme}`}>
          <section className={`item1-3 ${theme}`}>
          <label className={`in-line-heading ${theme}`}>Prep Time: </label>
          <input type="time" name="prepTime" className={`item ${theme}`} value={form.prepTime} onChange={handleChange} /> 
          <select className={`item ${theme}`}>
            <option></option>          
            <option>min(s)</option>          
            <option>hour(s)</option>          
          </select>
          </section>
          </section>

          <section className={`in-line3 ${theme}`}>
          <section className={`item1-4 ${theme}`}>
          <label className={`in-line-heading ${theme}`}>Cook Time: </label>
          <input type="time" name="cookTime" className={`item ${theme}`} value={form.cookTime} onChange={handleChange} /> 
          <select className={`item ${theme}`}>
            <option></option>          
            <option>min(s)</option>          
            <option>hour(s)</option>          
          </select>          
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
            <li>
             <textarea className={`large-input ${theme}`} name="instructions"
                       value={form.instructions} onChange={handleChange}
                       onInput={increaseBox} placeholder="Enter your recipe instructions...">
             </textarea>
             </li>            
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