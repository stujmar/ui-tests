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
            <input onChange={handleChange}></input>
        </div>
    )
}

export default Search