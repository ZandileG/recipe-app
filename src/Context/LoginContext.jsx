import React, { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

function LoginProvider({ children }) {
const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

//if a user was previously logged in, their details would be saved in localStorage so those details will be loaded
const [userDetails, setUserDetails] = useState(() => {
  const storedDetails = localStorage.getItem("userDetails");
  return storedDetails ? JSON.parse(storedDetails) : null;
});

useEffect(() => {
  if (userDetails) {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  } else {
    localStorage.removeItem("userDetails");
  }
}, [userDetails]);

//This makes sure that when th epage reloads, the user is still logged in
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

//A new user can sign up on my app and their details will be stored in local storage.
function signUp(username, password) {
    if (username && password){
        const newUser = { username, password };
        setUserDetails(newUser);
        localStorage.setItem("userDetails", JSON.stringify(newUser));
        return true;
    }
    return false;
}

//This checks if the user entered correct details
function login(username, password) {
    if (userDetails && username === userDetails.username && password === userDetails.password) {
        setIsLoggedIn(true);
        return true;
    } else {
        return false;
    }
}

function logout(){
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
}

return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, login, logout, signUp }}>
        {children}
    </LoginContext.Provider>    
    );
  }

export default LoginProvider;