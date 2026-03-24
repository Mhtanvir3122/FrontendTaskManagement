import React, { useEffect, useState } from "react";

import { MoonStars, SunDim } from "phosphor-react";

const HeaderDark: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedTheme = localStorage.getItem("theme-mode");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;

    localStorage.setItem("theme-mode", theme);

    const root = document.body;
    root.removeAttribute("data-theme");
    root.setAttribute("data-theme", theme);

    root.style.setProperty("--current-theme", theme);
  }, [theme, isClient]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!isClient) {
    return (
      <div className="header-dark">
        <div className="sun-logo head-icon bg-light-dark rounded-circle f-s-22 p-2">
          <MoonStars size={24} />
        </div>
        <div className="moon-logo head-icon bg-light-dark rounded-circle f-s-22 p-2">
          <SunDim size={24} />
        </div>
      </div>
    );
  }

  return (
    <div className="header-dark" onClick={toggleTheme}>
      <div
        className={`sun-logo head-icon bg-light-dark rounded-circle f-s-22 p-2 ${theme === "dark" ? "sun" : ""}`}
      >
        <MoonStars size={24} />
      </div>
      <div
        className={`moon-logo head-icon bg-light-dark rounded-circle f-s-22 p-2 ${theme === "dark" ? "moon" : ""}`}
      >
        <SunDim size={24} />
      </div>
    </div>
  );
};

export default HeaderDark;
