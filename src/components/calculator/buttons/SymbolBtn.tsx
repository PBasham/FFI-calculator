/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface DigitBtnProps {
    symbol: number
    className: string
}

export const DigitBtn: FC<DigitBtnProps> = ({symbol, className}) => {

    const handleClick = () => {
        console.log("I've been clicked! And my symbol is: ", symbol);
        
    }

   return (
       <div onClick={handleClick} className={className}>
           {symbol}
       </div>
   )
}