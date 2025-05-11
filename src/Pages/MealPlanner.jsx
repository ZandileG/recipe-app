import React, { Fragment } from "react";

import YourRecipes from "../Pages/YourRecipes";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import X from "../Images/X.png";
import "../Styles/MealPlanner.css";

function MealPlanner() {

  return (
    <Fragment>
      <main className="meal-planner-page">
      <header className="header"><nav><Navbar /></nav></header>

      <aside className="grid-sidebar">
      <section className="block">
      <img className="delete" src={X} alt="X" />
      <button type="button" className="edit">Edit</button>
      </section>

      <section className="block">
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section className="block">
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section className="block">
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section className="block">
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>

      <section className="block">
        <img className="delete" src={X} alt="X" />
        <button type="button" className="edit">Edit</button>
      </section>
    </aside>

      <section className="content">
        <table>
          <thead>
          <tr>
          <th scope="col">
            <button type="button" className="save">Save</button>
          </th>
          <th scope="col">Breakfast</th>
          <th scope="col">Lunch</th>
          <th scope="col">Dinner</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Monday</th>
              <td>
                <select name="breakfast" id="breakfast">
                  <option value="">Aretha</option>
                </select>
              </td>
              <td>
                 <select name="lunch" id="lunch">
                  <option value="">Franklin</option>
                </select>
              </td>
              <td>
                 <select name="dinner" id="dinner">
                  <option value="">Joy</option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row">Tuesday</th>
               <td>
                <select name="breakfast" id="breakfast">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" id="lunch">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" id="dinner">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row">Wednesday</th>
              <td>
                <select name="breakfast" id="breakfast">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" id="lunch">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" id="dinner">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row">Thursday</th>
               <td>
                <select name="breakfast" id="breakfast">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" id="lunch">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" id="dinner">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row">Friday</th>
              <td>
                <select name="breakfast" id="breakfast">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" id="lunch">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" id="dinner">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row">Saturday</th>
               <td>
                <select name="breakfast" id="breakfast">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" id="lunch">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" id="dinner">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row">Sunday</th>
               <td>
                <select name="breakfast" id="breakfast">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" id="lunch">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" id="dinner">
                  <option value=""></option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Footer />
      </main>
    </Fragment>
  );
}

export default MealPlanner;