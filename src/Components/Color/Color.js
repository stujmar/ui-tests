import React, { useState } from "react"
import { head, body } from '../Universal.module.css'
// import styles from './Color.module.css'
import {ColorPicker} from 'primereact/colorpicker';

const Color = () => {
    const [color, setColor] = useState('blue');
    const [color2, setColor2] = useState('');
    return (
        <div className={body}>
            <h2 className={head}>
                Color
            </h2>
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
            <ColorPicker format="rgb" value={color2} onChange={(e) => setColor2(e.value)} />
        </div>
    )
}

export default Color;