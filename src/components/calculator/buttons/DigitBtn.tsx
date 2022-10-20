/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface DigitBtnProps {
    digit: number
    className: string
}

export const DigitBtn: FC<DigitBtnProps> = ({digit, className}) => {

    const handleClick = () => {
        console.log("I've been clicked! And my digit is: ", digit);
        
    }

   return (
       <div onClick={handleClick} className={className}>
           {digit}
       </div>
   )
}