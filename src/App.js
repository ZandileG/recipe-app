import React, {useContext}  from "react";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";

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

/*The user can only access the homepage if they have logged in
  This means they have to log in each time they close and open the app*/
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(LoginContext);
    return isLoggedIn ? children : <Navigate to="/" />;
}

function App(){
  return( 
    <LoginProvider>
    <ThemeProvider>
    <SavedProvider>
    <BrowserRouter basename="/recipe-app">

    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home"element={<ProtectedRoute><Home /></ProtectedRoute>} />
    <Route path="/recipe/:id" element={<Recipe />} />
    <Route path="/meal-planner" element={<MealPlanner />} />
    
    <Route path="/saved-recipes" element={<SavedRecipes />} />
    <Route path="/create-recipe" element={<CreateRecipe />} />
    <Route path="/user-profile" element={<UserProfile />} />

    <Route path="*" element={<NotFound />} />
    </Routes>

    </BrowserRouter>
    </SavedProvider>
    </ThemeProvider>
    </LoginProvider>
  );
}

export default App;