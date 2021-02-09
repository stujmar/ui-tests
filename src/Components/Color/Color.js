import React, { useState } from "react"
import { head, body } from '../Universal.module.css'
// import styles from './Color.module.css'
import {ColorPicker} from 'primereact/colorpicker';

const Color = () => {
    const [color, setColor] = useState('');
    return (
        <div className={body}>
            <h2 className={head}>
                Color
            </h2>
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
        </div>
    )
}

export default Color;