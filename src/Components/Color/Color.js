import React, { useState } from "react"
import { head, body } from '../Universal.module.css'
// import styles from './Color.module.css'
import {ColorPicker} from 'primereact/colorpicker';

//Imports for PrimeReact color picker.
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';


const Color = () => {
    const [color, setColor] = useState(null);
    const [color2, setColor2] = useState('1976D2');

    const handlePickOne = (e) => {
        setColor(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div className={body}>
            <h2 className={head}>
                Color
            </h2>
            <p>Prime React</p>
            <ColorPicker value={color} onChange={handlePickOne} /><br/>
            <ColorPicker format="rgb" value={color2} onChange={(e) => setColor2(e.value)} />
        </div>
    )
}

export default Color;