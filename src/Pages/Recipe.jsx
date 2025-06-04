import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Close from "../Images/Close.png";
import axios from "axios";

import "../Styles/Recipe.css";
import "../Styles/Navbar.css";

function Recipe(){
const { id } = useParams();
const {theme} = useContext(ThemeContext);
const [recipe, setRecipe] = useState(null);

//This fetches the recipe that was opened by its id
useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => console.error(err));
  }, [id]);

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

   function openSidebar(){
       setIsOpen(true);
     }

    function closeSidebar(){
    setIsOpen(false);
  }

//This is a loading text to give the user feedback if it takes long for the data to load
  if (!recipe) return <p className={`loading ${theme}`}>Loading...</p>;

  return (
    <main className={`recipe-page ${isOpen ? "with-sidebar" : "full-width"}`}>
    <header className={`header ${theme}`}>
      <nav><Navbar isOpen={isOpen} openSidebar={openSidebar} /></nav>
    </header>

    <aside className={`sidebar ${theme} ${isOpen ? "inline-block" : "hidden"}`}>
       <button type="button" className={`close ${isOpen ? "inline-block" : "hidden"}`} onClick={e => {
            e.stopPropagation();
            closeSidebar();
            }}>
      <img src={Close} alt="Close" /></button>

          <h3 className={`page-heading3 ${theme}`}>Recipe Information</h3>

            <section className={`in-line ${theme}`}><p className="in-line-heading">Rating: </p>
            <p>{recipe.rating}</p>
            </section>

            <section className={`in-line ${theme}`}><p className="in-line-heading">No. of People Rated: </p>
            <p>{recipe.reviewCount}</p>
            </section>

            <section className={`in-line ${theme}`}><p className="in-line-heading">Cuisine: </p>
            <p>{recipe.cuisine}</p>
            </section>

            <section className={`in-line ${theme}`}><p className="in-line-heading">Difficulty: </p>
            <p>{recipe.difficulty}</p>
            </section>

            <section className={`in-line ${theme}`}><p className="in-line-heading">Meal Type: </p>
            {/*The meal type is an array so I want each item to be separated by a comma*/}
            <p className="layout2">{Array.isArray(recipe.mealType) ? recipe.mealType.join(", ") : recipe.mealType}</p>            
            </section>

            <section className={`in-line ${theme}`}><p className="in-line-heading">Calories Per Serving: </p>
            <p>{recipe.caloriesPerServing}</p>
            </section>

            <section className="layout">
            <section className={`in-line2 ${theme}`}><p className="in-line-heading">Servings: </p>
            <p>{recipe.servings}</p>
            </section>

             <section className={`in-line2 ${theme}`}><p className="in-line-heading">Prep Time: </p>
            <p>{recipe.prepTimeMinutes} Minutes</p>
            </section>

            <section className={`in-line2 ${theme}`}><p className="in-line-heading">Cooking Time: </p>
            <p>{recipe.cookTimeMinutes} Minutes</p>
            </section>
            </section>

          <section className={`grid-col2-1 ${theme}`}>
          <h3 className={`page-heading2-1 ${theme}`}>Ingredients</h3>
          <ul className={`info-p ${theme}`}>
          {recipe.ingredients && recipe.ingredients.map((ingredient, i) => (
          <li key={i}>
          <input type="checkbox" id={`ingredient-${i}`} />
          <label htmlFor={`ingredient-${i}`}>{ingredient}</label>
          </li>
          ))}
          </ul>
          </section>
    </aside>

    <section className={`content ${theme}`}>
    <h1 className={`page-heading ${theme}`}>{recipe.name}</h1>

        <section className={`recipe-page-grid ${theme}`}>
          <section className={`grid-col1 ${theme}`}>
            <img src={recipe.image} className={`recipe-details-image ${theme}`} alt="Recipe" />

            <section className={`in-line2 ${theme}`}><p className="in-line-heading">Servings: </p>
            <p>{recipe.servings}</p>
            </section>

             <section className={`in-line2 ${theme}`}><p className="in-line-heading">Prep Time: </p>
            <p>{recipe.prepTimeMinutes} Minutes</p>
            </section>

            <section className={`in-line2 ${theme}`}><p className="in-line-heading">Cooking Time: </p>
            <p>{recipe.cookTimeMinutes} Minutes</p>
            </section>
          </section>

          <section className={`grid-col2 ${theme}`}>
          <h3 className={`page-heading2 ${theme}`}>Ingredients</h3>
          <ul className={`info-p ${theme}`}>
          {recipe.ingredients && recipe.ingredients.map((ingredient, i) => (
          <li key={i}>
          <input type="checkbox" id={`ingredient-${i}`} />
          <label htmlFor={`ingredient-${i}`}>{ingredient}</label>
          </li>
          ))}
          </ul>
          </section>

          <section className={`grid-col3 ${theme}`}>
            <h3 className={`page-heading2 ${theme}`}>Instructions</h3>
            <ul className={`info-p2 ${theme}`}>
            {recipe.instructions && recipe.instructions.map((instruction, i) => (
            <li key={i}>{instruction}</li>
            ))}   
            </ul>
          </section>
        </section>
      </section>

      <Footer /> 
      </main>
  );
}

export default Recipe;