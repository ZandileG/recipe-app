import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
const [theme, setTheme] = useState("light");

//When the dark mode button is clicked, the whole app will be styled according to dark or light
function toggleTheme(){
  setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
}

return (
  <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
 ); 
}

export default ThemeProvider;