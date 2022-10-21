/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react';
import { Routes, Route, Navigate, redirect, useParams } from "react-router-dom"
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
import "./css/calculator.css"
import "./css/navBar.css"


function App() {
    
    const [history, setHistory] = useState([])

    const [navLinks, setNavLinks] = useState({
        activeNavLink: 0,
        allLinks: [
            {
                id: 0,
                name: "Home",
                element: <CalculatorPage />,
            },
            {
                id: 1,
                name: "History",
                element: <HistoryPage />,
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
        setNavLinks({...navLinks, activeNavLink: id})
    }

    return (
        <div className="app">
            <NavBar navLinks={navLinks} handleNavChange={handleNavChange}/>
            {/* @ts-ignore */}
            {navLinks.allLinks[navLinks.activeNavLink].element}
        </div>
    );
}

export default App;
