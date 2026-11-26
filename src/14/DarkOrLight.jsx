import { useState, useCallback } from "react";
import ThemaContext from "./ThemaContext";
import MainContent from "./MainContent";

function DarkOrLight() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
    }, []);

    return (
        <ThemaContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemaContext.Provider>
    );
}

export default DarkOrLight;
