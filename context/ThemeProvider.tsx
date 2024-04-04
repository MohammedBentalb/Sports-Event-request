'use client';
import { createContext, ReactNode, useEffect, useState } from 'react';

type ThemeContext = {
  mode: string;
  setMode: (val: string) => void;
};

export const ThemeContext = createContext<ThemeContext>({
  mode: 'light',
  setMode: () => {},
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState('dark');

  const toggleMode = (mode: string) => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
  };
  useEffect(() => {
    toggleMode(mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
