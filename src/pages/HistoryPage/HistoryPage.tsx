/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface HistoryPageProps {
    history: Array<string>
    activeTheme: any
}

export const HistoryPage: FC<HistoryPageProps> = ({ history, activeTheme }) => {

    return (
        <div className="history-div">
            {history.length < 1 ?
                <h1>No History yet</h1>
                :
                history.map((calc, index) => (
                    <div key={index} className={`calc-div theme-${activeTheme.themes[activeTheme.currentTheme]}`}>
                        {calc}
                    </div>
                ))
            }
        </div>
    )
}