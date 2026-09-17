import useTheme from "../../Hooks/useTheme";
import { Sun, Moon } from "../Icons";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon width="20px" height="20px" /> : <Sun width="20px" height="20px" />}
        </button>
    );
};

export default ThemeToggle;