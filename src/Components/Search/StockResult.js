import React from "react"
import { body, leftSection, rightSection } from './StockResult.module.css'
// import styles from './StockResult.module.css'

const StockResult = ({data}) => {
    return (
        <div className={body}>
            <div className={leftSection}>
            <div>{`Ticker: ${data.ticker}`}</div>
                <div>{`Name: ${data.name.substring(0,20)}...`}</div>
            </div>
            <div className={rightSection}>
                <button>WATCHLIST</button>
            </div>
        </div>
    )
}

export default StockResult;