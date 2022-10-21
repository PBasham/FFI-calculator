/*========================================
        Import Dependencies
========================================*/
import React, { useEffect, useState } from 'react';
// Components --------------------------------------------------
import { CalculatorPage } from "./pages/CalculatorPage/CalculatorPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";

import { NavBar } from "./components/navBar/NavBar"
// logo --------------------------------------------------
// import logo from './logo.svg';
// styling --------------------------------------------------
import "./css/styles.css"
import "./css/colors.css";
import "./css/navBar.css"
import "./css/calculator.css"
import "./css/history.css"
import "./css/settings.css"


function App() {

    const [history, setHistory] = useState<any>([])

    const [activeTheme, setActiveTheme] = useState<{
        currentTheme: string; themes: string[];
    }>({
        currentTheme: "Purple",
        themes: [
            "Purple",
            "Orange",
            "Green",
        ]
    })

    useEffect(() => {

    }, [])

    const handleUpdateTheme = (theme: string) => {
        setActiveTheme((current) => {
            return { ...current, currentTheme: theme }
        })
    }


    const handleAddToHistory = (newCalc: string) => {
        let array = history
        array.push(newCalc)
        setHistory(array)
    }

    const [navLinks, setNavLinks] = useState({
        activeNavLink: 0,
        allLinks: [
            {
                id: 0,
                name: "Home",
                element: <CalculatorPage activeTheme={activeTheme} handleAddToHistory={handleAddToHistory} />,
            },
            {
                id: 1,
                name: "History",
                element: <HistoryPage activeTheme={activeTheme} history={history} />,
            },
            {
                id: 2,
                name: "Settings",
                element: <SettingsPage activeTheme={activeTheme} handleUpdateTheme={handleUpdateTheme} />,
            },
        ]
    })


    const handleNavChange = (id: number) => {
        setNavLinks((current) => {
            return { ...navLinks, activeNavLink: id }
        })
    }

    return (
        <div className={`app theme-${activeTheme.currentTheme}`}>
            {history}
            <NavBar activeTheme={activeTheme} navLinks={navLinks} handleNavChange={handleNavChange} />
            {/* @ts-ignore */}
            {navLinks.allLinks[navLinks.activeNavLink].element}
        </div>
    );
}

export default App;
