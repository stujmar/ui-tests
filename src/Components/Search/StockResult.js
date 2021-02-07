import React from "react"
import { head, body } from '../Universal.module.css'
import styles from './StockResult.module.css'

const StockResult = ({name, currency, locale}) => {
    return (
        <div className={body}>
            <h2 className={head}>
                StockResult
            </h2>
        </div>
    )
}

export default StockResult;