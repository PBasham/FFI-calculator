/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface HistoryPageProps {
    history: Array<string>
    activeTheme: object
}

export const HistoryPage: FC<HistoryPageProps> = ({ history }) => {

    return (
        <div className="history-div">
            {history.length < 1 ?
                <h1>No History yet</h1>
                :
                history.map((calc, index) => (
                    <div key={index} className="calc-div">
                        {calc}
                    </div>
                ))
            }
        </div>
    )
}