import { useContext } from "react";
import themeContext from "../contexts/themeContext";

export default function useDarkMode() {
    const { darkModeStatus, setDarkModeStatus } = useContext(themeContext);
    
    const themeStatus : 'dark' | 'light' = darkModeStatus ? 'dark' : 'light';

    return {themeStatus, darkModeStatus, setDarkModeStatus};
}