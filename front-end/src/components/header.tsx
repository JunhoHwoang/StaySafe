import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="w-full p-4 flex items-center justify-between border-b">
      <Link to="/">
        <p className="text-3xl">StaySafe</p>
      </Link>
      <button onClick={() => setDarkMode(!darkMode)}>
        <Sun
          size={24}
          className="absolute rotate-90 scale-0 transition-all duration-300 hover:-translate-y-0.5 active:scale-95  active:shadow-inner dark:rotate-0 dark:scale-100"
        />
        <Moon
          size={24}
          className="rotate-0 scale-100 transition-all duration-300 hover:-translate-y-0.5  active:scale-95  active:shadow-inner dark:rotate-90 dark:scale-0"
        />
      </button>
    </div>
  );
};

export default Header;
