import React, { Fragment } from "react";

import CreateRecipe from "../Pages/CreateRecipe";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Delete from "../Images/Delete.png";
import Edit from "../Images/Edit.png";
import "../Styles/MealPlanner.css";

function MealPlanner() {

  return (
    <Fragment>
      <main className="meal-planner-page">
      <header className="header"><nav><Navbar /></nav></header>

      <aside className="grid-sidebar">
      <section className="block">
      <p className="week">Week 1</p>
      <img className="delete" src={Delete} alt="Delete" />
      <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <p className="week">Week 2</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <p className="week">Week 3</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <p className="week">Week 4</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <p className="week">Week 5</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>

      <section className="block">
      <p className="week">Week 6</p>
      <img className="delete" src={Delete} alt="Delete" />
        <img className="edit" src={Edit} alt="Pencil" />
      </section>
    </aside>

      <section className="content">
      <h1 className="page-heading">Meal Planner</h1>

        <table>
          <thead>
          <tr>
          <th scope="col" className="save">Save</th>
          <th scope="col">Breakfast</th>
          <th scope="col">Lunch</th>
          <th scope="col">Dinner</th>
          </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className ="col1">Monday</th>
              <td>
                <select name="breakfast" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" className="list">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className ="col1">Tuesday</th>
               <td>
                <select name="breakfast" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" className="list">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className ="col1">Wednesday</th>
              <td>
                <select name="breakfast" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" className="list">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className ="col1">Thursday</th>
               <td>
                <select name="breakfast" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" className="list">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className ="col1">Friday</th>
              <td>
                <select name="breakfast" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" className="list">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className ="col1">Saturday</th>
               <td>
                <select name="breakfast" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" className="list">
                  <option value=""></option>
                </select>
              </td>
            </tr>

            <tr>
              <th scope="row" className ="col1">Sunday</th>
               <td>
                <select name="breakfast" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="lunch" className="list">
                  <option value=""></option>
                </select>
              </td>
              <td>
                 <select name="dinner" className="list">
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