/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface SettingsPageProps {
    activeTheme: object
    handleUpdateTheme: (theme: string) => void
}

export const SettingsPage: FC<SettingsPageProps> = ({ }) => {

    return (
        <div className="settings-div">
            <div className="update-theme">
                <p className="settings-header">Theme</p>
                <div className="dropdown"></div>
            </div>
            <div className="updated-font">
                <p className="settings-header">Font</p>
                <div className="dropdown"></div>
            </div>
        </div>
    )
}