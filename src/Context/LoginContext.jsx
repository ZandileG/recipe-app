import React, { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

function LoginProvider({ children }) {
const [isLoggedIn, setIsLoggedIn] = useState(() =>{
        const LoginToken = localStorage.getItem("isLoggedIn");
        return LoginToken === "true";
});

const [userDetails, setUserDetails] = useState(() => {
    const storedDetails = localStorage.getItem("userDetails");
    return storedDetails ? JSON.parse(storedDetails) : null;
});

useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
}, [isLoggedIn]);

useEffect(() => {
    if (userDetails) {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
    } else {
        localStorage.removeItem("userDetails");
    }
}
, [userDetails]);

function signUp(username, password) {
    if (username && password){
        const newUser = { username, password };
        setUserDetails(newUser);
        localStorage.setItem("userDetails", JSON.stringify(newUser));
        return true;
    }
    return false;
}

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
    localStorage.removeItem("isLoggedIn");
}

return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, login, logout, signUp }}>
        {children}
    </LoginContext.Provider>
);

}
export default LoginProvider;