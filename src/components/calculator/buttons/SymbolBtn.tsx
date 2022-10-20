/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface SymbolBtnProps {
    symbol: string
    type: string
    onClick: (symbol: string, type: string) => void
    className: string
}

export const SymbolBtn: FC<SymbolBtnProps> = ({symbol, type, onClick, className}) => {

    const handleClick = () => {
        console.log("I've been clicked! And my symbol is: ", symbol);
        
    }

   return (
       <div onClick={() => onClick(symbol, type)} className={className}>
           {symbol}
       </div>
   )
}