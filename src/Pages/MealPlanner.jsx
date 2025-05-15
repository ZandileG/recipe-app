import React, { useContext } from "react";
import { ThemeContext } from '../Context/ThemeContext';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Delete from "../Images/Delete.png";
import "../Styles/MealPlanner.css";

function MealPlanner() {
const {theme} = useContext(ThemeContext);

  return (
    <main className="meal-planner-page">
    <header className={`header ${theme}`}><nav><Navbar /></nav></header>

      <aside className={`aside ${theme}`}>
      <h3 className="heading-center">Meal Plans</h3>
      
      <section className="grid-sidebar">
      <section className={`block ${theme}`}>
      <p className="week">Week 1</p>
      <img className="delete" src={Delete} alt="Delete" />
      <button className="edit">Edit</button>
      </section>
      </section>
    </aside>

      <section className={`content ${theme}`}>
      <h1 className={`page-heading ${theme}`}>Meal Planner</h1>

        <table className={`table ${theme}`}>
          <thead>
          <tr>
          <th scope="col" className={`save ${theme}`}>Save</th>
          <th scope="col" className={`th ${theme}`}>Breakfast</th>
          <th scope="col" className={`th ${theme}`}>Lunch</th>
          <th scope="col" className={`th ${theme}`}>Dinner</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className={`col1 ${theme}`}>Monday</th>
              <td className={`td ${theme}`}>
                <select name="breakfast" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="lunch" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="dinner" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Tuesday</th>
              <td className={`td ${theme}`}>
                <select name="breakfast" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="lunch" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="dinner" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Wednesday</th>
              <td className={`td ${theme}`}>
                <select name="breakfast" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="lunch" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="dinner" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Thursday</th>
              <td className={`td ${theme}`}>
                <select name="breakfast" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="lunch" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="dinner" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Friday</th>
              <td className={`td ${theme}`}>
                <select name="breakfast" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="lunch" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="dinner" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Saturday</th>
              <td className={`td ${theme}`}>
                <select name="breakfast" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="lunch" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="dinner" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className={`col1 ${theme}`}>Sunday</th>
              <td className={`td ${theme}`}>
                <select name="breakfast" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="lunch" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>

              <td className={`td ${theme}`}>
                 <select name="dinner" className={`list ${theme}`}>
                  <option value=""></option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer />
      </main>
  );
}

export default MealPlanner;