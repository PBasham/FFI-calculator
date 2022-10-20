/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'
import { DigitBtn } from "../../components/calculator/buttons/DigitBtn";
import { SymbolBtn } from "../../components/calculator/buttons/SymbolBtn";
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

    const handleSymbolClick = () => {
        
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
                <SymbolBtn symbol={"÷"} onClick={handleSymbolClick} className={"btn btn-acc"}/>
                <SymbolBtn symbol={"×"} onClick={handleSymbolClick} className={"btn btn-acc"}/>
                <DigitBtn digit={7} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={8} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={9} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"-"} onClick={handleSymbolClick} className={"btn btn-acc"}/>
                <DigitBtn digit={4} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={5} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={6} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"+"} onClick={handleSymbolClick} className={"btn btn-acc"}/>
                <DigitBtn digit={1} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={2} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={3} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"="} onClick={handleSymbolClick} className={"btn btn-acc span-two-vert"}/>
                <DigitBtn digit={0} onClick={handleAddNumber} className={"btn span-two-hor"}/>
                <SymbolBtn symbol={"."} onClick={handleSymbolClick} className={"btn"}/>
            </div>
        </div>
    )
}
