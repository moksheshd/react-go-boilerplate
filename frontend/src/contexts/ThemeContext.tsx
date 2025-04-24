
import React, { createContext, useState, useContext, useEffect } from "react";

type ColorOption = 
  | "slate" | "gray" | "zinc" | "neutral" | "stone" 
  | "red" | "orange" | "amber" | "yellow" | "lime" 
  | "green" | "emerald" | "teal" | "cyan" | "sky" 
  | "blue" | "indigo" | "violet" | "purple" | "fuchsia" 
  | "pink" | "rose";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  color: ColorOption;
  setColor: (color: ColorOption) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use function callbacks to safely initialize state
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('theme-mode');
      return (savedMode as ThemeMode) || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light'; // Default fallback if window is not available
  });
  
  const [color, setColor] = useState<ColorOption>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme-color') as ColorOption) || 'blue';
    }
    return 'blue'; // Default fallback if window is not available
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', mode);
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-color', color);
      const root = window.document.documentElement;
      root.style.setProperty('--theme-color', color);
      
      // Remove all color classes
      const colors: ColorOption[] = [
        "slate", "gray", "zinc", "neutral", "stone", 
        "red", "orange", "amber", "yellow", "lime", 
        "green", "emerald", "teal", "cyan", "sky", 
        "blue", "indigo", "violet", "purple", "fuchsia", 
        "pink", "rose"
      ];
      
      colors.forEach(c => {
        root.classList.remove(`theme-${c}`);
      });
      
      // Add the selected color class
      root.classList.add(`theme-${color}`);
    }
  }, [color]);

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
