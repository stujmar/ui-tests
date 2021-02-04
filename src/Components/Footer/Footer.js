import React from "react"
import { head, body } from '../Universal.module.css'
import {footBody} from './Footer.module.css'

const Footer = () => {
    return (
        <div className={footBody}>
            <div className={head}>
                <a href="#">back</a>
            </div>
        </div>
    )
}

export default Footer;