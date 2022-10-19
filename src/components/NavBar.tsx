/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface NavBarProps {
    navModalOpen: boolean
}

export const NavBar: FC<NavBarProps> = ({navModalOpen}) => {



   return (
       <div className={`nav-bar ${navModalOpen ? "open" : null}`}>
            {/* on click change state for MenueOpen to true */}
            <div className="hamburger-menue"></div>
       </div>
   )
}
