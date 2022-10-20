/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
import { DigitBtn } from "../../components/calculator/buttons/DigitBtn";
import { ButtonsDiv } from "../../components/calculator/ButtonsDiv"

interface CalculatorPageProps {

}

export const CalculatorPage: FC<CalculatorPageProps> = ({ }) => {


    const [currentValue, setCurrentValue] = useState<string>("0")




    const handleClear = () => {
        console.log("Clear calculation");
        // Clear PreviousNumbers
        // reset value to 0
        setCurrentValue(() => "0")
    }

    const handleAddNumber = (number: number) => {
        console.log(" my digit is ", number)

        if (currentValue === "0") {
            setCurrentValue(() =>
                "" + number
            )

        } else {

            setCurrentValue((currentNumber) =>
                "" + currentNumber + number
            )
        }

        console.log(currentValue)

    }

    const placeHolder = () => {
    }


    return (
        <div className="calculator-div">
            <div className="calculation-div">
                <div className="current">{currentValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            </div>
            <div className="buttons-grid">
                <button onClick={handleClear} className="btn btn-brd-acc">C</button>
                <div className="btn placeholder"></div>
                <button onClick={placeHolder} className="btn btn-acc">÷</button>
                <button onClick={placeHolder} className="btn btn-acc">×</button>
                <DigitBtn digit={7} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={8} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={9} onClick={handleAddNumber} className={"btn"} />
                <button onClick={placeHolder} className="btn btn-acc">-</button>
                <DigitBtn digit={4} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={5} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={6} onClick={handleAddNumber} className={"btn"} />
                <button onClick={placeHolder} className="btn btn-acc">+</button>
                <DigitBtn digit={1} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={2} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={3} onClick={handleAddNumber} className={"btn"} />
                <button onClick={placeHolder} className="btn btn-acc span-two-vert">=</button>
                <button onClick={placeHolder} className="btn span-two-hor">0</button>
                <button onClick={placeHolder} className="btn">.</button>
            </div>
        </div>
    )
}
