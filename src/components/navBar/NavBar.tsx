/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'

interface NavBarProps {
}

export const NavBar: FC<NavBarProps> = ({ }) => {

    const [navModalOpen, setNavModalOpen] = useState(false)

    const handleNavClick = () => {
        setNavModalOpen(!navModalOpen)
    }
    const closeMobileNav = () => {
        setNavModalOpen(false)
    }

    return (
        <div className={`nav-bar ${navModalOpen ? "open" : null}`}>
            {/* on click change state for MenuOpen to true */}
            <div onClick={handleNavClick} className="navBtn">
                <div className="hamburger-menu"></div>
            </div>
        </div>
    )
}
