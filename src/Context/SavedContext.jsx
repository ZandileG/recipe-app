import React, { createContext, useState } from "react";

export const SavedContext = createContext();

function SavedProvider({ children }) {
  const [savedRecipes, setSavedRecipes] = useState([]);

  function saveRecipe (recipe) {
    setSavedRecipes ((prev) => {
  //I don't want the same recipe to be saved multiple times
      if (prev.some((r) => r.id === recipe.id)) return prev;
      return [...prev, recipe];
    });
  };

 function removeRecipe (id) {
    setSavedRecipes ((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  const isSaved = (id) => savedRecipes.some((recipe) => recipe.id === id);
  
return (
  <SavedContext.Provider value={{savedRecipes, saveRecipe, removeRecipe, isSaved}}>
    {children}
  </SavedContext.Provider>
 ); 
}

export default SavedProvider;