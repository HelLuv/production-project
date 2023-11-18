import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_kEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";

const DEFAULT_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_kEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  function toggleTheme() {
    setTheme(prevTheme => prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  }

  const defaultValue = useMemo<ThemeContextProps>(() => ({
    theme: theme, setTheme: toggleTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
