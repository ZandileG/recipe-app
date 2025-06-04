import React, { createContext, useState, useEffect } from "react";

export const SavedContext = createContext();

function SavedProvider({ children }) {

//This is so that the saved recipes don't disappear when the page is reloaded
  const [savedRecipes, setSavedRecipes] = useState(() => {
    const stored = localStorage.getItem("savedRecipes");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes]);

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

 function isSaved(id) {
  return savedRecipes.some((recipe) => recipe.id === id);
}
  
return (
  <SavedContext.Provider value={{savedRecipes, saveRecipe, removeRecipe, isSaved}}>
    {children}
  </SavedContext.Provider>
 ); 
}

export default SavedProvider;