/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface DigitBtnProps {
    digit: number
    onClick: (number: number) => void
    className: string
}

export const DigitBtn: FC<DigitBtnProps> = ({digit, onClick, className}) => {

    const handleClick = () => {
        console.log("I've been clicked! And my digit is: ", digit);
        
    }

   return (
       <div onClick={() => onClick(digit)} className={className}>
           {digit}
       </div>
   )
}