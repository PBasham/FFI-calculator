/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'
import { ButtonsDiv } from "../../components/calculator/ButtonsDiv"

interface CalculatorPageProps {

}

export const CalculatorPage: FC<CalculatorPageProps> = ({ }) => {

    return (
        <div className="calculator-div">
            <div className="calculation-div">
                <div className="current">0</div>
            </div>
            <div className="buttons-grid">
                <button className="btn btn-brd-acc">C</button>
                <div className="btn placeholder"></div>
                <button className="btn btn-acc">÷</button>
                <button className="btn btn-acc">x</button>
                <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>
                <button className="btn btn-acc">-</button>
                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>
                <button className="btn btn-acc">+</button>
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn btn-acc span-two-vert">=</button>
                <button className="btn span-two-hor">0</button>
                <button className="btn">.</button>
            </div>
        </div>
    )
}
