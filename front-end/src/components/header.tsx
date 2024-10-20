import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`w-full p-6 flex items-center justify-between border-b shadow-sm ${darkMode ? 'bg-gradient-to-r from-gray-800 to-red-700' : 'bg-gradient-to-r from-gray-100 to-red-200'}`}>
      <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
        <svg className={`w-8 h-8 ${darkMode ? 'text-yellow-300' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <p className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>SafeVolt</p>
      </Link>
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleDarkMode}
          className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-red-300 hover:bg-red-400'}`}
        >
          {darkMode ? (
            <Sun size={24} className="text-yellow-300" />
          ) : (
            <Moon size={24} className="text-gray-800" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;