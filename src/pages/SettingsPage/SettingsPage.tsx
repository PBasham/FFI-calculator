/*========================================
        Import Dependencies
========================================*/
import React, { FC, useState } from 'react'

interface SettingsPageProps {
    activeTheme: any
    activeFont: any
    handleUpdateTheme: (id: number) => void
    handleUpdateFont: (id: number) => void
}

export const SettingsPage: FC<SettingsPageProps> = ({ activeTheme, activeFont, handleUpdateTheme, handleUpdateFont }) => {

    const [fontMenuOpen, setFontMenuOpen] = useState(false)
    const [themeMenuOpen, setThemeMenuOpen] = useState(false)
    

    const handleFontSelect = (id: number) => {
        setFontMenuOpen(false)
        handleUpdateFont(id)
    }
    const handleThemeSelect = (id: number) => {
        setThemeMenuOpen(false)
        handleUpdateTheme(id)
    }

    const handleFontMenu = () => {
        setFontMenuOpen(!fontMenuOpen)
    }
    const handleThemeMenu = () => {
        setThemeMenuOpen(!themeMenuOpen)
    }

    return (
        <div className="settings-div">

            <div className="update-font">
                <p className="settings-header">Font</p>
                <div className="menu">
                    <div onClick={handleFontMenu} className={`menu-selected theme-${activeTheme.themes[activeTheme.currentTheme]}`}>
                        <p>{activeFont.fonts[activeFont.currentFont]}</p>
                    </div>
                    <div className={`menu-dropdown ${fontMenuOpen ? `open` : null}`}>
                        {activeFont.fonts.map((font: string, index: number) => (
                            index !== activeFont.currentFont ? <p onClick={() => handleFontSelect(index)} className="menu-option" key={index}>{font}</p> : null
                        ))}
                    </div>
                </div>
            </div>

            <div className="update-theme">
                <p className="settings-header">Theme</p>
                <div className="menu">
                    <div onClick={handleThemeMenu} className={`menu-selected theme-${activeTheme.themes[activeTheme.currentTheme]}`}>
                        <p>{activeTheme.themes[activeTheme.currentTheme]}</p>
                    </div>
                    <div className={`menu-dropdown ${themeMenuOpen ? `open` : null}`}>
                        {activeTheme.themes.map((theme: string, index: number) => (
                            index !== activeTheme.currentTheme ? <p onClick={() => handleThemeSelect(index)} className="menu-option" key={index}>{theme}</p> : null
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}