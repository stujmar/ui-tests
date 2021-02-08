import React from "react"
import { head, body } from '../Universal.module.css'
import styles from './StockResult.module.css'

const StockResult = ({data}) => {
    return (
        <div className={body}>
            <div className={head}>
                {`Name: ${data.name.substring(0,20)}...`}
            </div>
        </div>
    )
}

export default StockResult;