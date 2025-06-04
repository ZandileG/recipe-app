import React, { useContext, useState, useEffect, Fragment } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { SavedContext } from "../Context/SavedContext";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Delete from "../Images/Delete.png";
import Close from "../Images/Close.png";
import "../Styles/MealPlanner.css";

function MealPlanner(){
const {theme} = useContext(ThemeContext);
const {savedRecipes} = useContext(SavedContext);
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

/*The user will get a message that tells them how to create a meal plan
  when they first open the meal planner page. The message will only 
  apppear once that it doesn't annoy the user*/
  useEffect(() => {
  if (!localStorage.getItem("message")) {
    alert("To see the meal options in the table, you should first save recipes from each meal category.");
    localStorage.setItem("message", "true");
  }
}, []);

//This is a way to track the meals for each day
const [currentPlan, setCurrentPlan] = useState({
  Monday: { Breakfast: "", Lunch: "", Dinner: "" },
  Tuesday: { Breakfast: "", Lunch: "", Dinner: "" },
  Wednesday: { Breakfast: "", Lunch: "", Dinner: "" },
  Thursday: { Breakfast: "", Lunch: "", Dinner: "" },
  Friday: { Breakfast: "", Lunch: "", Dinner: "" },
  Saturday: { Breakfast: "", Lunch: "", Dinner: "" },
  Sunday: { Breakfast: "", Lunch: "", Dinner: "" },
});

//The saved plans will be stored in local storage so that they can still be found if the user reloads the page or logs out
const [savedPlans, setSavedPlans] = useState(() => {
  const storedPlans = localStorage.getItem("mealPlans");
  return storedPlans ? JSON.parse(storedPlans) : [];
});

useEffect(() => {
  localStorage.setItem("mealPlans", JSON.stringify(savedPlans));
}, [savedPlans]);

//This checks if all the meal slots are filled before the meal plan can be saved
function saveMealPlan() {
  if (Object.values(currentPlan).every(day => Object.values(day).every(Boolean))) {
    setSavedPlans([...savedPlans, { plan: currentPlan, type: "Complete" }]);
    setCurrentPlan({
      Monday: { Breakfast: "", Lunch: "", Dinner: "" },
      Tuesday: { Breakfast: "", Lunch: "", Dinner: "" },
      Wednesday: { Breakfast: "", Lunch: "", Dinner: "" },
      Thursday: { Breakfast: "", Lunch: "", Dinner: "" },
      Friday: { Breakfast: "", Lunch: "", Dinner: "" },
      Saturday: { Breakfast: "", Lunch: "", Dinner: "" },
      Sunday: { Breakfast: "", Lunch: "", Dinner: "" },
    });
    alert("Your Meal Plan was successfully saved!");
  } else {
    alert("Please fill in all the slots before saving.");
  }
}

//This is a way to group the separate meal plans so that they are placed within the same week
const filteredPlans = savedPlans.filter(smallPlan => smallPlan && smallPlan.plan && smallPlan.type);
const groupedPlans = [];
for (let i = 0; i < filteredPlans.length; i += 3) {
  groupedPlans.push(filteredPlans.slice(i, i + 3));
}

//The three functions below are for the separate Breakfast, Lunch and Dinner tables for smaller screens
function saveBreakfastPlan(){
if (Object.values(currentPlan).every(day => Boolean(day.Breakfast))){
    setSavedPlans([...savedPlans, { plan: currentPlan, type: "Breakfast" }]);
    setCurrentPlan(prev => {
      const reset = {};
      Object.keys(prev).forEach(day => {
        reset[day] = { ...prev[day], Breakfast: "" };
      });
      return reset;
    });
      alert("Your Breakfast Meal Plan was successfully saved!");
  } else {
  alert("Please fill in all the slots before saving.");
  }
}

function saveLunchPlan(){
  if (Object.values(currentPlan).every(day => Boolean(day.Lunch))){
    setSavedPlans([...savedPlans, { plan: currentPlan, type: "Lunch" }]);
    setCurrentPlan(prev => {
      const reset = {};
      Object.keys(prev).forEach(day => {
        reset[day] = { ...prev[day], Lunch: "" };
      });
      return reset;
    });
      alert("Your Lunch Meal Plan was successfully saved!");
  } else {
  alert("Please fill in all the slots before saving.");
  }
}

function saveDinnerPlan(){
  if (Object.values(currentPlan).every(day => Boolean(day.Dinner))){
    setSavedPlans([...savedPlans, { plan: currentPlan, type: "Dinner" }]);
    setCurrentPlan(prev => {
      const reset = {};
      Object.keys(prev).forEach(day => {
        reset[day] = { ...prev[day], Dinner: "" };
      });
      return reset;
    });
      alert("Your Dinner Meal Plan was successfully saved!");
  } else {
  alert("Please fill in all the slots before saving.");
  }
}

//This updates the current plan when a meal is selected
function handleChange(day, mealType, value){
  setCurrentPlan(prev => ({
    ...prev, [day]: {
    ...prev[day],
        [mealType]: value
    }
  }));
}

//This deletes a saved meal plan by filtering it out of the savedPlans array
function handleDelete(index){
  setSavedPlans(prev => prev.filter((_, i) => i !== index));
}

function openSidebar(){
    setIsOpen(true);
  }

function closeSidebar(){
    setIsOpen(false);
  }

//This gets the saved recipes and sorts them by meal type so that they can appear in the dropdowns
function getSavedRecipes(type){
  return savedRecipes.filter(recipe => Array.isArray(recipe.mealType)
      ? recipe.mealType.includes(type)
      : recipe.mealType === type
  );
}

  return (
    <main className={`meal-planner-page ${isOpen ? "with-sidebar" : "full-width"}`}>
    <header className={`header ${theme}`}><nav><Navbar isOpen={isOpen} openSidebar={openSidebar} /></nav></header>

      <aside className={`aside ${theme} ${isOpen ? "inline-block" : "hidden"}`}>
    <section className="sidebar">
            <button type="button" className={`close ${isOpen ? "inline-block" : "hidden"}`} onClick={e => {
            e.stopPropagation();
            closeSidebar();
            }}>
      <img src={Close} alt="Close" /></button>
      </section>

      <h3 className="heading-center">Meal Plans</h3>
      {savedPlans.length === 0 ? (
     <p className="bold">You have not created any meal plans.</p>
     ) : (
  <section className="grid-sidebar">
  {groupedPlans.map((weekPlans, weekIndex) => (
  <Fragment key={weekIndex}>
  {weekPlans.map((smallPlan, i) => (
  <section key={i} className={`block ${theme}`}>
  <p className="week" onClick={() => setCurrentPlan(smallPlan.plan)}>Week {weekIndex + 1} {smallPlan.type}</p>
  <button className="delete-btn" onClick={() => handleDelete(weekIndex * 3 + i)}>
  <img className="delete" src={Delete} alt="Delete" />
  </button>
  </section>
 ))}
    </Fragment>
  ))}
</section>
      )}
    </aside>

      <section className={`content ${theme}`}>
      <h1 className={`page-heading ${theme}`}>Meal Planner</h1>

      <section className={`table-wrapper ${theme}`}>
        <table className={`table ${theme}`}>
          <thead>
          <tr>
          <th scope="col" className={`save ${theme}`}><button onClick={saveMealPlan}>Save</button></th>
          <th scope="col" className={`th1 ${theme}`}>Breakfast</th>
          <th scope="col" className={`th1 ${theme}`}>Lunch</th>
          <th scope="col" className={`th1 ${theme}`}>Dinner</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className={`col1 ${theme}`}>Monday</th>
              <td className={`td ${theme}`}>
              <select value={currentPlan.Monday.Breakfast} onChange={(e) => handleChange("Monday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                 {getSavedRecipes("Breakfast").map(recipe => (
                  <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
              </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Monday.Lunch} onChange={(e) => handleChange("Monday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Monday.Dinner} onChange={(e) => handleChange("Monday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Tuesday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Tuesday.Breakfast} onChange={(e) => handleChange("Tuesday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Tuesday.Lunch} onChange={(e) => handleChange("Tuesday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Tuesday.Dinner} onChange={(e) => handleChange("Tuesday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Wednesday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Wednesday.Breakfast} onChange={(e) => handleChange("Wednesday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Wednesday.Lunch} onChange={(e) => handleChange("Wednesday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Wednesday.Dinner} onChange={(e) => handleChange("Wednesday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Thursday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Thursday.Breakfast} onChange={(e) => handleChange("Thursday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Thursday.Lunch} onChange={(e) => handleChange("Thursday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Thursday.Dinner} onChange={(e) => handleChange("Thursday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Friday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Friday.Breakfast} onChange={(e) => handleChange("Friday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Friday.Lunch} onChange={(e) => handleChange("Friday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Friday.Dinner} onChange={(e) => handleChange("Friday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Saturday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Saturday.Breakfast} onChange={(e) => handleChange("Saturday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Saturday.Lunch} onChange={(e) => handleChange("Saturday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Saturday.Dinner} onChange={(e) => handleChange("Saturday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Sunday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Sunday.Breakfast} onChange={(e) => handleChange("Sunday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Sunday.Lunch} onChange={(e) => handleChange("Sunday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select value={currentPlan.Sunday.Dinner} onChange={(e) => handleChange("Sunday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        </section>

{/*Below are different versions of the table above, I'm using them to change the layout for responsive design*/}
          <section className={`table-wrapper1 ${theme}`}>
        <table className={`table ${theme}`}>
          <thead>
          <tr>
          <th scope="col" className={`save ${theme}`}><button onClick={saveBreakfastPlan}>Save</button></th>
          <th scope="col" className={`th1 ${theme}`}>Breakfast</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className={`col1 ${theme}`}>Monday</th>
              <td className={`td ${theme}`}>
              <select value={currentPlan.Monday.Breakfast} onChange={(e) => handleChange("Monday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                 {getSavedRecipes("Breakfast").map(recipe => (
                  <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
              </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Tuesday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Tuesday.Breakfast} onChange={(e) => handleChange("Tuesday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Wednesday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Wednesday.Breakfast} onChange={(e) => handleChange("Wednesday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Thursday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Thursday.Breakfast} onChange={(e) => handleChange("Thursday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Friday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Friday.Breakfast} onChange={(e) => handleChange("Friday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Saturday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Saturday.Breakfast} onChange={(e) => handleChange("Saturday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Sunday</th>
              <td className={`td ${theme}`}>
                <select value={currentPlan.Sunday.Breakfast} onChange={(e) => handleChange("Sunday", "Breakfast", e.target.value)}
                      className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Breakfast").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        </section>

          <section className={`table-wrapper1 ${theme}`}>
        <table className={`table ${theme}`}>
          <thead>
          <tr>
          <th scope="col" className={`save ${theme}`}><button onClick={saveLunchPlan}>Save</button></th>
          <th scope="col" className={`th1 ${theme}`}>Lunch</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className={`col1 ${theme}`}>Monday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Monday.Lunch} onChange={(e) => handleChange("Monday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Tuesday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Tuesday.Lunch} onChange={(e) => handleChange("Tuesday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Wednesday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Wednesday.Lunch} onChange={(e) => handleChange("Wednesday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Thursday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Thursday.Lunch} onChange={(e) => handleChange("Thursday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Friday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Friday.Lunch} onChange={(e) => handleChange("Friday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Saturday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Saturday.Lunch} onChange={(e) => handleChange("Saturday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Sunday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Sunday.Lunch} onChange={(e) => handleChange("Sunday", "Lunch", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Lunch").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        </section>

          <section className={`table-wrapper1 ${theme}`}>
        <table className={`table ${theme}`}>
          <thead>
          <tr>
          <th scope="col" className={`save ${theme}`}><button onClick={saveDinnerPlan}>Save</button></th>
          <th scope="col" className={`th1 ${theme}`}>Dinner</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className={`col1 ${theme}`}>Monday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Monday.Dinner} onChange={(e) => handleChange("Monday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Tuesday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Tuesday.Dinner} onChange={(e) => handleChange("Tuesday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Wednesday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Wednesday.Dinner} onChange={(e) => handleChange("Wednesday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Thursday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Thursday.Dinner} onChange={(e) => handleChange("Thursday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Friday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Friday.Dinner} onChange={(e) => handleChange("Friday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Saturday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Saturday.Dinner} onChange={(e) => handleChange("Saturday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Sunday</th>
              <td className={`td ${theme}`}>
                 <select value={currentPlan.Sunday.Dinner} onChange={(e) => handleChange("Sunday", "Dinner", e.target.value)}
                       className={`list ${theme}`}>
                 <option></option>
                  {getSavedRecipes("Dinner").map(recipe => (
                    <option key={recipe.id} value={recipe.id}>{recipe.name}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        </section>
      </section>
      <Footer />
      </main>
  );
}

export default MealPlanner;