/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { DigitBtn } from "../../components/calculator/buttons/DigitBtn";
import { ButtonsDiv } from "../../components/calculator/ButtonsDiv"

interface CalculatorPageProps {

}

export const CalculatorPage: FC<CalculatorPageProps> = ({ }) => {







    const handleClear = () => {
        console.log("Clear calculation");
    }
    
    const placeHolder = () => {
    }
    
    
    return (
        <div className="calculator-div">
            <div className="calculation-div">
                <div className="current">0</div>
            </div>
            <div className="buttons-grid">
                <button onClick={handleClear} className="btn btn-brd-acc">C</button>
                <div className="btn placeholder"></div>
                <button onClick={placeHolder} className="btn btn-acc">÷</button>
                <button onClick={placeHolder} className="btn btn-acc">×</button>
                <DigitBtn digit={7} className={"btn"}/>
                <DigitBtn digit={8} className={"btn"}/>
                <DigitBtn digit={9} className={"btn"}/>
                <button onClick={placeHolder} className="btn btn-acc">-</button>
                <DigitBtn digit={4} className={"btn"}/>
                <DigitBtn digit={5} className={"btn"}/>
                <DigitBtn digit={6} className={"btn"}/>
                <button onClick={placeHolder} className="btn btn-acc">+</button>
                <DigitBtn digit={1} className={"btn"}/>
                <DigitBtn digit={2} className={"btn"}/>
                <DigitBtn digit={3} className={"btn"}/>
                <button onClick={placeHolder} className="btn btn-acc span-two-vert">=</button>
                <button onClick={placeHolder} className="btn span-two-hor">0</button>
                <button onClick={placeHolder} className="btn">.</button>
            </div>
        </div>
    )
}
