import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const savedTheme = localStorage.getItem('theme');
    const [currentTheme, setCurrentTheme] = useState(savedTheme || 'light');
    const toggleTheme = () => {
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light' ;
            if(nextTheme==='dark'){
               setCurrentTheme("dark");
               localStorage.setItem("theme", "dark")
            }else if(nextTheme==='light'){
               setCurrentTheme("light");
               localStorage.setItem("theme", "light")
            }else if(nextTheme==='midnight'){
               setCurrentTheme("midnight");
               localStorage.setItem("theme", "midnight")
            
          };
    };

    

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};