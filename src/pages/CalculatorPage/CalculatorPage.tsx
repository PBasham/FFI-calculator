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


    const [showPreviousValue, setShowPreviousValue] = useState("")

    const [previousValue, setPreviousValue] = useState<string>("")

    const [showCurrentValue, setShowCurrentValue] = useState("0")

    const [currentValue, setCurrentValue] = useState<string>("0")

    const [decimalExist, setDecimalExist] = useState(false)


    const handleClear = () => {
        // Clear PreviousNumbers
        // reset value to 0 | "" | decimalExist(false)
        setShowCurrentValue(() => "0")
        setCurrentValue(() => "0")
        setShowPreviousValue(() => "")
        setPreviousValue(() => "")
        setDecimalExist(false)
    }


    // take previous number, symbol, and currentNumber and calculate the answer
    const handleCalculate = async () => {
        return `${Math.round(eval(`${previousValue}${currentValue}`) * 100) / 100}`
    }

    const handleEqualPress = async () => {
        if (previousValue !== "") {
            const result = await handleCalculate()
            // send the current `${showVaue} = ${result}` to the historyState
            setDecimalExist(false)
            setShowCurrentValue(result)
            setCurrentValue(result)
            setShowPreviousValue("")
            setPreviousValue("")
        }
    }

    const handleAddNumber = (number: string) => {
        // Add number to the current value

        // if the currentValue is 0
        let unFormattedValue = ""
        if (currentValue === "0") {
            // if num === "." and decimalExist === false, add the decimal onto the 0, setDecimalExist(true)
            if (number === "." && !decimalExist) {
                setDecimalExist(true)
                unFormattedValue = "0."
                setCurrentValue(() => unFormattedValue)
                setShowCurrentValue(() => unFormattedValue)
            } else {
                // else if num !== "." set currentValue === number
                unFormattedValue = "" + number
                setCurrentValue(() => unFormattedValue)
                setShowCurrentValue(() => unFormattedValue)
            }

            // else (currentValue !== "0")
        } else {
            // if num === "." and decimalExist === false, add the decimal to the number | set decimalExist(true)
            unFormattedValue = "" + currentValue + number
            if (number === "." && !decimalExist) {
                setDecimalExist(true)
                setCurrentValue(() => unFormattedValue)
                setShowCurrentValue(() => unFormattedValue)
            } else if (number !== ".") {
                // else append number
                setCurrentValue(() => unFormattedValue)
                setShowCurrentValue(() => unFormattedValue)
            }
        }
    }

    const handleSymbolClick = async (symbol: string, type: string) => {
        // what it does --------------------------------------------------
        // if there is a previous value, carry out calculations and make make the calculation the previousValue with the new symbol.
        // let unFormattedValue: any = ""
        let unFormattedValue = currentValue.split(".")
        let formattedValue: string = ""
        if (previousValue !== "") {
            // seperate the show value by "." and add commas to the number
            if (unFormattedValue.length > 1) {
                formattedValue = unFormattedValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + unFormattedValue[1]
            } else {
                formattedValue = unFormattedValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            // add the new symbol to this value
            setShowPreviousValue((current) => current + formattedValue + symbol)
            setPreviousValue((current) => current + currentValue + type)
        } else {
            if (unFormattedValue.length > 1) {
                formattedValue = unFormattedValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + unFormattedValue[1]
            } else {
                formattedValue = unFormattedValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }

            setShowPreviousValue((current) => formattedValue + symbol)
            setPreviousValue((current) => currentValue + type)
        }
        // else add currentValue and passed symbol to the previous value
        //  --------------------------------------------------
        setDecimalExist(false)
        setShowCurrentValue("0")
        setCurrentValue("0")
    }

    return (
        <div className="calculator-div">
            <div className="calculation-div">
                <div className="previous">{showPreviousValue}</div>
                <div className="current">{showCurrentValue}</div>
            </div>
            <div className="buttons-grid">
                <button onClick={handleClear} className="btn btn-brd-acc">C</button>
                <div className="btn placeholder"></div>
                <SymbolBtn symbol={"÷"} type={"/"} onClick={handleSymbolClick} className={"btn btn-acc"} />
                <SymbolBtn symbol={"×"} type={"*"} onClick={handleSymbolClick} className={"btn btn-acc"} />
                <DigitBtn digit={"7"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"8"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"9"} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"-"} type={"-"} onClick={handleSymbolClick} className={"btn btn-acc"} />
                <DigitBtn digit={"4"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"5"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"6"} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"+"} type={"+"} onClick={handleSymbolClick} className={"btn btn-acc"} />
                <DigitBtn digit={"1"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"2"} onClick={handleAddNumber} className={"btn"} />
                <DigitBtn digit={"3"} onClick={handleAddNumber} className={"btn"} />
                <SymbolBtn symbol={"="} type={"="} onClick={handleEqualPress} className={"btn btn-acc span-two-vert"} />
                <DigitBtn digit={"0"} onClick={handleAddNumber} className={"btn span-two-hor"} />
                <DigitBtn digit={"."} onClick={handleAddNumber} className={"btn"} />
            </div>
        </div>
    )
}
