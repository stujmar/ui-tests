import React from "react"
import { head, body } from '../Universal.module.css'
// import styles from './Color.module.css'
import {ColorPicker} from 'primereact/colorpicker';

const Color = () => {
    return (
        <div className={body}>
            <h2 className={head}>
                Color
            </h2>
            <ColorPicker value={color1} onChange={(e) => setColor1(e.value)} />
        </div>
    )
}

export default Color;