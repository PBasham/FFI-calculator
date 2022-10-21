/*========================================
        Import Dependencies
========================================*/
import React, { FC } from 'react'

interface HistoryPageProps {
    history: Array<string>
}

export const HistoryPage: FC<HistoryPageProps> = ({ history }) => {

    return (
        <div className="history-div">
            {!history.length ?
                <h1>Test</h1>
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