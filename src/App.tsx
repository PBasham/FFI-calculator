/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react';
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


function App() {

    const [history, setHistory] = useState<any>([])

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
                element: <CalculatorPage handleAddToHistory={handleAddToHistory} />,
            },
            {
                id: 1,
                name: "History",
                element: <HistoryPage history={history} />,
            },
            {
                id: 2,
                name: "Settings",
                element: <SettingsPage />,
            },
        ]
    })


    const handleNavChange = (id: number) => {
        // @ts-ignore
        setNavLinks({ ...navLinks, activeNavLink: id })
    }

    return (
        <div className="app">
            {history}
            <NavBar navLinks={navLinks} handleNavChange={handleNavChange} />
            {/* @ts-ignore */}
            {navLinks.allLinks[navLinks.activeNavLink].element}
        </div>
    );
}

export default App;
