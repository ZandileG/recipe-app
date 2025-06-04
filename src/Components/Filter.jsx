import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Filter({ setDifficulty, setMealType }){
const {theme} = useContext(ThemeContext);

/*This is a filter component I tried to implement into the Home and Saved Recipes Pages 
  I was not able to make it work properly so I had to add the filter elements manually*/
 function filterDifficulty(diff){
  setDifficulty(diff);
}

function filterMealType(type){
  setMealType(type);
}

    return(
    <Fragment>
    <h3 className="heading">Difficulty</h3>
    <button className={`filter ${theme}`} type="button" onClick={() => filterDifficulty("Easy")}>Easy</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterDifficulty("Medium")}>Medium</button>

    <h3 className="heading">Meal Type</h3>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Breakfast")}>Breakfast</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Lunch")}>Lunch</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Dinner")}>Dinner</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Dessert")}>Dessert</button>

    <h3 className="heading">Other Categories</h3>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Appetizer")}>Appetizer</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Beverage")}>Beverage</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Side Dish")}>Side Dish</button>
    <button className={`filter ${theme}`} type="button" onClick={() => filterMealType("Snack")}>Snack</button>
     </Fragment>
    );
   }
export default Filter;