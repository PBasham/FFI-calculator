/*========================================
        Import Dependencies
========================================*/
import React, { useState } from 'react';
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
import { NavModal } from "./components/navBar/NavModal";


function App() {

    const [navModalOpen, setNavModalOpen] = useState(false)

    const openMobileNav = () => {
        setNavModalOpen(true)
    }
    const closeMobileNav = () => {
        setNavModalOpen(false)
    }


    return (
        <div className="app">
            {/* <NavModal navModalOpen={navModalOpen} closeMobileNav={closeMobileNav}/> */}
            <NavBar navModalOpen={navModalOpen}/>
            <CalculatorPage />
        </div>
    );
}

export default App;
