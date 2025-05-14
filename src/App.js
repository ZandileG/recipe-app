import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MealPlanner from "./Pages/MealPlanner";
import NotFound from "./Pages/NotFound";
import UserProfile from "./Pages/UserProfile";

import Recipe from "./Pages/Recipe";
import CreateRecipe from "./Pages/CreateRecipe";
import SavedRecipes from "./Pages/SavedRecipes";
import SavedProvider from "./Context/SavedContext";
import LoginProvider  from "./Context/LoginContext";
import ThemeProvider from "./Context/ThemeContext";
import "./App.css";
import "./index.css";

function App(){
  return( 
    <LoginProvider>
    <ThemeProvider>
    <SavedProvider>
    <BrowserRouter basename="/recipe-app">
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/"element={<Home />} />
    <Route path="/recipe/:id" element={<Recipe />} />
    <Route path="/meal-planner" element={<MealPlanner />} />
    
    <Route path="/user-profile" element={<UserProfile />} />
    <Route path="/saved-recipes" element={<SavedRecipes />} />
    <Route path="/create-recipe" element={<CreateRecipe />} />

    <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </SavedProvider>
    </ThemeProvider>
    </LoginProvider>
  );
}

export default App;