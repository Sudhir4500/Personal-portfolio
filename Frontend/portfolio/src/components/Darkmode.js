import { useEffect, useState } from "react";

const Darkmode = () => {
    const getSystemPreference = () => 
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    const getInitialTheme = () => {
        // Check localStorage first
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme;
        // If no user preference, use system setting
        return getSystemPreference();
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        // Apply theme
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        // Listen for system theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemThemeChange = (e) => {
            if (!localStorage.getItem("theme")) {
                setTheme(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }, []);

    const handleThemeSwitch = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark"); // Save choice
    };

    return (
        <div className="dark:text-white">
            <button onClick={handleThemeSwitch} className="text-white">
                {theme === "dark" ? (
                    <span className="material-icons">light_mode</span>
                ) : (
                    <span className="material-icons">dark_mode</span>
                )}
            </button>
        </div>
    );
};

export default Darkmode;
