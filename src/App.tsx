/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react';
// Components --------------------------------------------------
import { CalculatorPage } from "./pages/CalculatorPage/CalculatorPage";
import { NavBar } from "./components/navBar/NavBar";
// logo --------------------------------------------------
// import logo from './logo.svg';
// styling --------------------------------------------------
import "./css/styles.css"
import "./css/colors.css";
import "./css/calculator.css"
import "./css/navBar.css"


function App() {

    return (
        <div className="app">
            <NavBar />
            <CalculatorPage />
            {/* HistoryPage */}
            {/* SettingsPage */}
        </div>
    );
}

export default App;
