/*========================================
        Import Dependencies
========================================*/
import React from 'react';
// Components --------------------------------------------------
import { CalculatorPage } from "./pages/CalculatorPage/CalculatorPage";
import { NavBar } from "./components/NavBar";
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
        </div>
    );
}

export default App;
