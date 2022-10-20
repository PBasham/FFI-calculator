/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface SymbolBtnProps {
    symbol: string
    onClick: () => void
    className: string
}

export const SymbolBtn: FC<SymbolBtnProps> = ({symbol, className}) => {

    const handleClick = () => {
        console.log("I've been clicked! And my symbol is: ", symbol);
        
    }

   return (
       <div onClick={handleClick} className={className}>
           {symbol}
       </div>
   )
}