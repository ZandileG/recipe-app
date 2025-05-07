import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginProvider, { LoginContext } from "./Context/LoginContext";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MealPlanner from "./Pages/MealPlanner";
import NotFound from "./Pages/NotFound";
import UserProfile from "./Pages/UserProfile";

import Recipe from "./Pages/Recipe";
import YourRecipes from "./Pages/YourRecipes";
import SavedRecipes from "./Pages/SavedRecipes";
import SavedProvider from "./Context/SavedContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(LoginContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App(){
  return( 
    <LoginProvider>
    <SavedProvider>
    <BrowserRouter basename="/recipe-app">
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/"element={<ProtectedRoute><Home /></ProtectedRoute>} />
    <Route path="/recipe/:recipeId" element={<Recipe />} />
    <Route path="/mealPlanner" element={<MealPlanner />} />
    
    <Route path="/userProfile" element={<UserProfile />} />
    <Route path="/savedRecipes" element={<SavedRecipes />} />
    <Route path="/yourRecipes" element={<YourRecipes />} />

    <Route path="/notFound" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </SavedProvider>
    </LoginProvider>
  );
}

export default App;