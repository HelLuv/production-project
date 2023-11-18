import {LOCAL_STORAGE_THEME_kEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  function toggleTheme() {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_kEY, newTheme);
  }

  return {theme, toggleTheme};
}