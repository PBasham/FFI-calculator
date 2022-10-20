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


    const [previousValue, setPreviousValue] = useState<string>("")

    const [currentValue, setCurrentValue] = useState<string>("0")

    const [currentOperation, setCurrentOperation] = useState<any>({symbol: "", type: ""})

    const [decimalExist, setDecimalExist] = useState(false)


    const handleClear = () => {
        console.log("Clear calculation");
        // Clear PreviousNumbers
        // reset value to 0 | "" | decimalExist(false)
        setCurrentValue(() => "0")
        setPreviousValue(() => "")
        setCurrentOperation(() => "")
        setDecimalExist(false)
    }


    // take previous number, symbol, and currentNumber and calculate the answer
    const handleCalculate = async () => {
        console.log("Calculate the new value!")
        console.log(`${previousValue} ${currentOperation.symbol} ${currentValue}`)
        return "value"
    }
    

    const handleAddNumber = (number: string) => {
        console.log(" my digit is ", number)

        // Add number to the current value

        // if the currentValue is 0
            // if num === "." and decimalExist === false, add the decimal onto the 0, setDecimalExist(true)
            // else if num !== "." set currentValue === number

        // else (currentValue !== "0")
            // if num === "." and decimalExist === false, add the decimal to the number | set decimalExist(true)
            // else append number


        if (currentValue === "0") {

            if (number === ".") {

                setCurrentValue(() => "." )
            } else {
                setCurrentValue(() => "" + number )
            }

        } else {
            setCurrentValue((currentNumber) =>
                "" + currentNumber + number
            )
        }

        console.log(currentValue)

    }

    const handleSymbolClick  = async (symbol: string, type: string) => {
        // what it does --------------------------------------------------
        // if there is a previous value, carry out calculations and make make the calculation the previousValue with the new symbol.
        console.log(type)
        if (previousValue !== "") {
            // Calculate the new value
            const newValue = await handleCalculate()
            // add the new symbol to this value
            setPreviousValue(`${newValue}`)
            setCurrentOperation({symbol: symbol, type: type})
        } else {
            setPreviousValue(`${currentValue}`)
            setCurrentOperation({symbol: symbol, type: type})
            console.log(`Set previousValue to ${currentValue}`)
        }
        // else add currentValue and passed symbol to the previous value
        //  --------------------------------------------------
        setCurrentValue("0")
        if (currentOperation === "") {
            setCurrentOperation(symbol)
        } else {
            let calculatedValue = ""
        }
    }

    const placeHolder = () => {
    }

    return (
        <div className="calculator-div">
            <div className="calculation-div">
                <div className="previous">{previousValue} {currentOperation.symbol}</div>
                {/* .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") */}
                <div className="current">{currentValue}</div>
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
