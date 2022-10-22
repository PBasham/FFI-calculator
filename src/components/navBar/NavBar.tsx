/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'

interface NavBarProps {
    navLinks: any
    handleNavChange: (id: number) => void
    activeTheme: any
}

export const NavBar: FC<NavBarProps> = ({ navLinks, handleNavChange, activeTheme }) => {

    const [navModalOpen, setNavModalOpen] = useState(false)

    const handleMenuClick = () => {
        setNavModalOpen(!navModalOpen)
    }
    const closeMobileNav = () => {
        setNavModalOpen(false)
    }

    const handleNavClick = (id: number) => {
        closeMobileNav()
        handleNavChange(id)
    }

    return (
        <div className={`nav-bar theme-${activeTheme.themes[activeTheme.currentTheme]} ${navModalOpen ? "open" : null}`}>
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
