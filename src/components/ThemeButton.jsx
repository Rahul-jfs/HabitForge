import { useTheme } from "../utils/ThemeContext";

const ThemeButton = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <button
      className={` bg-gray-600 text-white p-2 rounded cursor-pointer ${
        darkMode ? "darkmode" : ""
      }  hover:bg-gray-700`}
      onClick={toggleTheme}
    >
      {darkMode ? "Light mode" : "Dark mode"}
    </button>
  );
};

export default ThemeButton;
