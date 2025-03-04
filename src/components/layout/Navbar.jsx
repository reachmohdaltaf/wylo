import { Moon, SunMoon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "lofi");

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = theme === "lofi" ? "forest" : "lofi";
    setTheme(newTheme);
  };

  return (
    <div className="navbar flex items-center justify-between bg-base-100 shadow-sm px-6">
      <div className="logo">
        <h1 className="font-bold text-4xl text-primary">Zylo</h1>
      </div>
      <div className="flex items-center gap-2">
        {theme === "lofi" ? <SunMoon /> : <Moon /> }
        <input
          type="checkbox"
          className="toggle theme-controller"
          checked={theme === "forest"}
          onChange={handleToggle}
        />
      </div>
    </div>
  );
};

export default Navbar;
