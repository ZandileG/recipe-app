import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App(){
  return( 
    <BrowserRouter basename="/recipe-app">
    <Routes>
    <Route />
    </Routes>
    </BrowserRouter>
  );
}

export default App;