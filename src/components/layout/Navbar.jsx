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
        <img src="https://res.cloudinary.com/dqdwfvrkb/image/upload/v1741078537/qkffldibxjijkxp0zqom.svg" className={`h-12 w-12 ${theme === "forest" ? "invert" : ""}`} alt="" />
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
