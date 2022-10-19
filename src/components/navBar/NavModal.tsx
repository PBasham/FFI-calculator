/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface NavModalProps {
    navModalOpen: boolean
    closeMobileNav: () => void
}

export const NavModal: FC<NavModalProps> = ({ navModalOpen, closeMobileNav}) => {


    
   return (
       <div className={`nav-modal ${navModalOpen ? `open`: null}`}>
            {/* on click change state for MenueOpen to true */}
            <div className="hamburger-menue"></div>
       </div>
   )
}
