import React from "react"
import { head, body } from '../Universal.module.css'
import styles from './TextEdit.module.css'

const TextEdit = () => {
    return (
        <div className={body} >
            <h2 className={head}>Text</h2>
        </div>
    )
}

export default TextEdit;