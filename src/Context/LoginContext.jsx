import React, { createContext, useContext, useEffect, useState } from "react";

export const LoginContext = createContext();

function LoginProvider({ children }) {
const [isLoggedIn, setIsLoggedIn] = useState(
    function() {
        const LoginToken = localStorage.getItem("isLoggedIn");
        return LoginToken === "true";
});

useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
}, [isLoggedIn]);

function login(username, password) {
    if (username === "admin" && password === "admin") {
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
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
    </LoginContext.Provider>
);

}
export default LoginProvider;