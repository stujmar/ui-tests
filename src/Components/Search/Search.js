import React, { useState } from "react"
import { head, body } from '../Universal.module.css'
import styles from './Search.module.css'

const Search = () => {

    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className={body}>
            <h2 className={head}>Search</h2>
            <form>
                <label htmlFor="symbol">Type any stock symbol. </label>
                <input id="symbol" type="text" onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default Search