import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

//I want the theme to remain the same even after the page reloads so I'm saving it in localStorage
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);


//This will apply the dark mode theme to my page backgounds, by default it's the light colour
useEffect(() => {
  document.body.classList.toggle("dark", theme === "dark");
}, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;