import React, {
    FC, PropsWithChildren, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps,
} from '../lib/ThemeContext';

const DEFAULT_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK));
    }

    const defaultValue = useMemo<ThemeContextProps>(() => ({
        theme, setTheme: toggleTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
