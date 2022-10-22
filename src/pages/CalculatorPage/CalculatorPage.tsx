/*========================================
        Import Dependencies
========================================*/
import React, { FC, useEffect, useState } from 'react'
import { DigitBtn } from "../../components/calculator/buttons/DigitBtn";
import { SymbolBtn } from "../../components/calculator/buttons/SymbolBtn";

interface CalculatorPageProps {
    handleAddToHistory: (newCalc: string) => void
    activeTheme: any
}

export const CalculatorPage: FC<CalculatorPageProps> = ({ handleAddToHistory, activeTheme }) => {


    const [showPreviousValue, setShowPreviousValue] = useState("")

    const [previousValue, setPreviousValue] = useState<string>("")

    const [showCurrentValue, setShowCurrentValue] = useState("")

    const [currentValue, setCurrentValue] = useState<string>("")

    const [decimalExist, setDecimalExist] = useState(false)

    useEffect(() => {

    }, [])

    const formatValue = (value: string) => {
        // split on decimal
        const arrValues = value.split(".")
        // check if the length is > 1
        if (arrValues.length > 1)
            // if so, format the left side, add the decimal back, add the right side back in
            return arrValues[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + arrValues[1]
        else {
            // else, format the whole string
            return arrValues[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }

    const handleClear = () => {
        // Clear PreviousNumbers
        // reset value to 0 | "" | decimalExist(false)
        setShowCurrentValue(() => "")
        setCurrentValue(() => "")
        setShowPreviousValue(() => "")
        setPreviousValue(() => "")
        setDecimalExist(false)
    }


    // take previous number, symbol, and currentNumber and calculate the answer
    const handleCalculate = async () => {
        // let formattedValue = formatValue()

        return `${Math.round(eval(`${previousValue}${currentValue}`) * 100) / 100}`
    }

    const handleEqualPress = async () => {
        if (previousValue !== "" && currentValue !== "") {
            const result = await handleCalculate()
            let formattedValue = formatValue(result)
            // send the current `${showVaue} = ${result}` to the historyState
            handleAddToHistory(`${showPreviousValue} ${showCurrentValue} = ${formattedValue}`)
            setDecimalExist(false)
            setShowCurrentValue(formattedValue)
            setCurrentValue(result)
            setShowPreviousValue("")
            setPreviousValue("")
        }
    }

    const handleAddNumber = (number: string) => {
        // Add number to the current value

        let formattedValue = formatValue(currentValue + number)
        if (currentValue === "0") {

            if (number === "." && !decimalExist) {
                setDecimalExist(true)
                setCurrentValue(() => "0.")
                setShowCurrentValue(() => "0.")
            } else {
                // else if num !== "." set currentValue === number
                setCurrentValue(() => "" + number)
                setShowCurrentValue(() => "" + number)
            }


        } else { // else (currentValue !== "0")

            // if num === "." and decimalExist === false, add the decimal to the number | set decimalExist(true)
            if (number === "." && !decimalExist) {
                setDecimalExist(true)
                setShowCurrentValue(() => formattedValue)
                setCurrentValue(() => "" + currentValue + number)
            } else if (number !== ".") {
                // else append number
                setShowCurrentValue(() => formattedValue)
                setCurrentValue(() => "" + currentValue + number)
            }
        }
    }

    const handleSymbolClick = async (symbol: string, type: string) => {
        // format the currentValue and add the symbol to the end

        if (currentValue === "" && previousValue === "") return
        
        let formattedValue = formatValue(currentValue)
        if (previousValue !== "" && currentValue === "") {
            // strip the end and add the new symbol
            let changedPrevious = previousValue.slice(0,previousValue.length - 1)
            console.log(changedPrevious)
            formattedValue = formatValue(changedPrevious)
            
            setShowPreviousValue((current) => `${formattedValue} ${symbol}`)
            setPreviousValue((current) => `${changedPrevious} ${type}`)
        } else if (previousValue !== "") {
            // add the new symbol to this value
            setShowPreviousValue((current) => `${current} ${formattedValue} ${symbol}`)
            setPreviousValue((current) => `${current} ${currentValue} ${type}`)
        } else {
            setShowPreviousValue((current) => `${formattedValue} ${symbol}`)
            setPreviousValue((current) => `${currentValue} ${type}`)
        }
        // reset currentValues
        setDecimalExist(false)
        setShowCurrentValue("")
        setCurrentValue("")
    }

    return (
        <div className="calculator-div">
            <div className={`calculation-div theme-${activeTheme.themes[activeTheme.currentTheme]}`}>
                <div className="previous">{showPreviousValue}</div>
                <div className="current">{showCurrentValue}</div>
            </div>
            <div className="buttons-grid">
                <button onClick={handleClear} className={`btn symbol-clear btn-brd-acc theme-${activeTheme.themes[activeTheme.currentTheme]}`}>C</button>
                <div className="btn placeholder"></div>
                <SymbolBtn symbol={"÷"} type={"/"} onClick={handleSymbolClick} className={`btn symbol-divide btn-acc theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <SymbolBtn symbol={"×"} type={"*"} onClick={handleSymbolClick} className={`btn symbol-multiply btn-acc theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"7"} onClick={handleAddNumber} className={`btn digit-7 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"8"} onClick={handleAddNumber} className={`btn digit-8 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"9"} onClick={handleAddNumber} className={`btn digit-9 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <SymbolBtn symbol={"-"} type={"-"} onClick={handleSymbolClick} className={`btn symbol-subtract btn-acc theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"4"} onClick={handleAddNumber} className={`btn digit-4 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"5"} onClick={handleAddNumber} className={`btn digit-5 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"6"} onClick={handleAddNumber} className={`btn digit-6 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <SymbolBtn symbol={"+"} type={"+"} onClick={handleSymbolClick} className={`btn symbol-add btn-acc theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"1"} onClick={handleAddNumber} className={`btn digit-1 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"2"} onClick={handleAddNumber} className={`btn digit-2 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <DigitBtn digit={"3"} onClick={handleAddNumber} className={`btn digit-3 theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
                <SymbolBtn symbol={"="} type={"="} onClick={handleEqualPress} className={`btn symbol-equal btn-acc theme-${activeTheme.themes[activeTheme.currentTheme]} span-two-vert`} />
                <DigitBtn digit={"0"} onClick={handleAddNumber} className={`btn digit-0 theme-${activeTheme.themes[activeTheme.currentTheme]} span-two-hor`} />
                <DigitBtn digit={"."} onClick={handleAddNumber} className={`btn digit-decimal theme-${activeTheme.themes[activeTheme.currentTheme]}`} />
            </div>
        </div>
    )
}
