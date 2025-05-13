import React, {Fragment} from "react";
import "../Styles/RecipeCard.css";

import Save from "../Images/Icon.webp";
import Delete from "../Images/Delete.png";

function RecipeCard({recipe, onSelect}) {

  return (
    <Fragment>
      <main className="recipe-card" onClick={onSelect}>
      <img className="save-shortcut" src={Save} alt="Save" />
      <img className="delete-shortcut" src={Delete} alt="Delete" />

        <section className="card1">
          <img className="recipe-image" src={`https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp`} alt="Recipe" />
        </section>
        <section className="card2"><h4>{recipe.name}</h4></section>
      </main>
    </Fragment>
  );
}

export default RecipeCard;