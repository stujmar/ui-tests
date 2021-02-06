import React, { useState, useEffect } from "react"
import { head, body } from '../Universal.module.css'
import styles from './Search.module.css'

const Search = () => {

    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        setQuery(e.target.value);
    }

    useEffect(() => {
        if (query) {
            console.log(query, "from useEffect");
        }
    }, [query])

    return (
        <div className={body}>
            <h2 className={head}>Search</h2>
            <form>
                <label htmlFor="symbol">Type any stock symbol.
                    <input 
                        id="symbol" 
                        type="text" 
                        value={query}
                        onChange={handleChange}></input>
                 </label>
            </form>
        </div>
    )
}

export default Search