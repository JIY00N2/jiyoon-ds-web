"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeContextValue = {
  isDarkMode: boolean;
  handleClickDarkMode: VoidFunction;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } else {
      setIsDarkMode(theme === "dark");
    }
  }, []);

  const handleClickDarkMode = useCallback(() => {
    setIsDarkMode((isDark) => {
      localStorage.setItem("theme", isDark ? "light" : "dark");
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "light" : "dark",
      );
      return !isDark;
    });
  }, []);

  const value = useMemo(
    () => ({ isDarkMode, handleClickDarkMode }),
    [isDarkMode, handleClickDarkMode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const value = useContext(ThemeContext);

  if (value === null) {
    throw Error("Cannot find ThemeContext");
  }

  return value;
};
