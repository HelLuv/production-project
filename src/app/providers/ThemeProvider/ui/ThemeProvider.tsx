import React, {
    FC, ReactNode, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps,
} from '../lib/ThemeContext';

let DEFAULT_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | '';

export interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || DEFAULT_THEME as Theme);

    function toggleTheme() {
        let newTheme: Theme;
        if (DEFAULT_THEME) {
            newTheme = DEFAULT_THEME;
        } else {
            switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.HYPERWAVE;
                break;
            case Theme.HYPERWAVE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.DARK;
            }
        }

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        DEFAULT_THEME = '';
    }

    const defaultValue = useMemo<ThemeContextProps>(() => ({
        theme, setTheme: toggleTheme,
    }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
