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
        currentTheme: number;
        themes: string[];
    }>({
        currentTheme: 0,
        themes: [
            "purple",
            "orange",
            "green",
        ]
    })

    const [activeFont, setActiveFont] = useState<{
        currentFont: number;
        fonts: string[];
    }>({
        currentFont: 0,
        fonts: [
            "sans-serif",
            "Courier New",
            "Times New Roman",
        ]
    })


    const handleUpdateFont = (id: number) => {
        setActiveFont((current) => {
            return { ...current, currentFont: id }
        })
    }
    const handleUpdateTheme = (id: number) => {
        setActiveTheme((current) => {
            return { ...current, currentTheme: id }
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
            },
            {
                id: 1,
                name: "History",
            },
            {
                id: 2,
                name: "Settings",
            },
        ]
    })


    const handleNavChange = (id: number) => {
        setNavLinks((current) => {
            return { ...navLinks, activeNavLink: id }
        })
    }

    return (
        <div className={`app theme-${activeTheme.themes[activeTheme.currentTheme]}`} style={{ fontFamily: activeFont.fonts[activeFont.currentFont] }} >
            {history}
            <NavBar activeTheme={activeTheme} navLinks={navLinks} handleNavChange={handleNavChange} />
            {/* @ts-ignore */}
            {navLinks.allLinks[navLinks.activeNavLink].element}
            {navLinks.activeNavLink === 0 ? <CalculatorPage activeTheme={activeTheme} handleAddToHistory={handleAddToHistory} /> : null}
            {navLinks.activeNavLink === 1 ? <HistoryPage activeTheme={activeTheme} history={history} /> : null}
            {navLinks.activeNavLink === 2 ? <SettingsPage activeTheme={activeTheme} activeFont={activeFont} handleUpdateTheme={handleUpdateTheme} handleUpdateFont={handleUpdateFont} /> : null}
        </div>
    );
}

export default App;
