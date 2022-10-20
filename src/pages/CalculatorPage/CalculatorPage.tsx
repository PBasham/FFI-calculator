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


    const [previousValue, setPreviousValue] = useState("")

    const [currentValue, setCurrentValue] = useState<string>("0")

    const [decimalExist, setDecimalExist] = useState(false)

    let currentOperation = ""

    const handleClear = () => {
        console.log("Clear calculation");
        // Clear PreviousNumbers
        // reset value to 0
        setCurrentValue(() => "0")
        setPreviousValue(() => "")
    }

    const handleAddNumber = (number: string) => {
        console.log(" my digit is ", number)

        if (currentValue === "0") {
            if (number === ".") {

                setCurrentValue(() =>
                "."
                )
            } else {
                setCurrentValue(() =>
                "" + number
                )
            }

        } else {

            setCurrentValue((currentNumber) =>
                "" + currentNumber + number
            )
        }

        console.log(currentValue)

    }

    const handleSymbolClick = (symbol: string, type: string) => {
        setPreviousValue(`${currentValue} ${symbol}`)
        setCurrentValue("0")
        if (currentOperation === "") {
            currentOperation = symbol
        } else {
            let calculatedValue = ""
        }
    }

    const handleCalculate = () => {

    }

    const placeHolder = () => {
    }

    return (
        <div className="calculator-div">
            <div className="calculation-div">
                <div className="previous">{previousValue}</div>
                <div className="current">{currentValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            </div>
            <div className="buttons-grid">
                <button onClick={handleClear} className="btn btn-brd-acc">C</button>
                <div className="btn placeholder"></div>
                <SymbolBtn symbol={"÷"} type={"divide"} onClick={handleSymbolClick} className={"btn btn-acc"}/>
                <SymbolBtn symbol={"×"} type={"multiply"} onClick={handleSymbolClick} className={"btn btn-acc"}/>
                <DigitBtn digit={"7"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"8"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"9"} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"-"} type={"subtract"} onClick={handleSymbolClick} className={"btn btn-acc"}/>
                <DigitBtn digit={"4"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"5"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"6"} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"+"} type={"add"} onClick={handleSymbolClick} className={"btn btn-acc"}/>
                <DigitBtn digit={"1"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"2"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"3"} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"="} type={"equal"} onClick={handleCalculate} className={"btn btn-acc span-two-vert"}/>
                <DigitBtn digit={"0"} onClick={handleAddNumber} className={"btn span-two-hor"}/>
                <DigitBtn digit={"."} onClick={handleAddNumber} className={"btn"}/>
            </div>
        </div>
    )
}
