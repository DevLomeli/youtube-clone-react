import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#fff";
  const bgColor = theme === "light" ? "#fff" : "#333";

  document.body.style.color = color;
  document.body.style.background = bgColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, bgColor, color }}>
      {children}
    </ThemeContext.Provider>
  );
};
