import React from "react"
import { head } from '../Universal.module.css'
import {footBody} from './Footer.module.css'

const Footer = () => {
    return (
        <div className={footBody}>
            <div className={head}>
                <a href="https://www.gostugo.com/">back</a>
            </div>
        </div>
    )
}

export default Footer;