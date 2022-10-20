/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'

interface NavBarProps {
    navLinks: any
    handleNavChange: (id: number) => void
}

export const NavBar: FC<NavBarProps> = ({ navLinks, handleNavChange }) => {

    const [navModalOpen, setNavModalOpen] = useState(false)

    const handleMenuClick = () => {
        setNavModalOpen(!navModalOpen)
    }
    const closeMobileNav = () => {
        setNavModalOpen(false)
    }

    const handleNavClick = (id: number) => {
        handleNavChange(id)
    }

    return (
        <div className={`nav-bar ${navModalOpen ? "open" : null}`}>
            {/* on click change state for MenuOpen to true */}
            <div onClick={handleMenuClick} className="navBtn">
                <div className="hamburger-menu"></div>
            </div>
            <div className="nav-links">
                {navLinks.allLinks.map((link: any, key: number) => (
                    <p key={link.id} onClick={() => handleNavClick(link.id)} className={`nav-link ${navModalOpen ? "open" : null}`}>{link.name}</p>
                ))}
            </div>
        </div>
    )
}
