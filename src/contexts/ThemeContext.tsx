import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  sidebarOption: string;
  layoutOption: string;
  colorOption: string;
  textOption: string;
  setSidebarOption: (option: string) => void;
  setLayoutOption: (option: string) => void;
  setColorOption: (option: string) => void;
  setTextOption: (option: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeName = "Ki-Admin-React-Theme";

const getLocalStorageItem = (key: string, defaultValue: string): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(`${themeName}-${key}`) || defaultValue;
  }
  return defaultValue;
};

const setLocalStorageItem = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(`${themeName}-${key}`, value);
  }
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sidebarOption, setSidebarOptionState] = useState("vertical-sidebar");
  const [layoutOption, setLayoutOptionState] = useState("ltr");
  const [colorOption, setColorOptionState] = useState("default");
  const [textOption, setTextOptionState] = useState("medium-text");

  useEffect(() => {
    setSidebarOptionState(
      getLocalStorageItem("sidebar-option", "vertical-sidebar")
    );
    setLayoutOptionState(getLocalStorageItem("layout-option", "ltr"));
    setColorOptionState(getLocalStorageItem("color-option", "default"));
    setTextOptionState(getLocalStorageItem("text-option", "medium-text"));
  }, []);

  // Apply theme to document body using data attributes
  useEffect(() => {
    if (typeof document !== "undefined") {
      const body = document.body;
      const html = document.documentElement;

      // Apply sidebar option as data attribute
      body.setAttribute("data-sidebar", sidebarOption);

      // Apply layout option as data attribute
      body.setAttribute("data-layout", layoutOption);
      if (layoutOption === "box-layout") {
        html.removeAttribute("dir");
      } else {
        html.setAttribute("dir", layoutOption);
      }

      // Apply color option as data attribute
      body.setAttribute("data-color", colorOption);

      // Apply text option as data attribute
      body.setAttribute("data-text", textOption);
    }
  }, [sidebarOption, layoutOption, colorOption, textOption]);

  const setSidebarOption = (option: string) => {
    setSidebarOptionState(option);
    setLocalStorageItem("sidebar-option", option);
  };

  const setLayoutOption = (option: string) => {
    setLayoutOptionState(option);
    setLocalStorageItem("layout-option", option);
  };

  const setColorOption = (option: string) => {
    setColorOptionState(option);
    setLocalStorageItem("color-option", option);
  };

  const setTextOption = (option: string) => {
    setTextOptionState(option);
    setLocalStorageItem("text-option", option);
  };

  const value: ThemeContextType = {
    sidebarOption,
    layoutOption,
    colorOption,
    textOption,
    setSidebarOption,
    setLayoutOption,
    setColorOption,
    setTextOption,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

