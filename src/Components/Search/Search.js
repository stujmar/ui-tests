import React, { useState, useEffect } from "react"
import axios from 'axios';
import { head, body } from '../Universal.module.css'
import styles from './Search.module.css'

const Search = () => {
    let divArray;
    const [query, setQuery] = useState('');
    const [data, setData] = useState();
    const [results, setResults] = useState([]);
    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        let url = "https://api.polygon.io/v2/reference/tickers?apiKey=5pIvRZ87rHbQoMwQTX5fERfYQYKBf9sU&search="
        if (query) {
            axios.get(`${url}${query}`)
            .then(res => {
              const stonks = res.data;
              console.log(stonks.tickers);
              setData(stonks.tickers);
            })
        }
    }, [query])

    useEffect(() => {
        if (data) {

        divArray = data.map((item) => {
                return <div>{`${item.name}`}</div>
            })
            setResults(divArray);
        }
    },[data]);


    return (
        <div className={body}>
            <h2 className={head}>Search</h2>
            <form>
                <label htmlFor="symbol"><p>{'Type any stock symbol. '}</p>
                    <input 
                        id="symbol" 
                        type="text" 
                        value={query}
                        onChange={handleChange}></input>
                 </label>
            </form>
           {results}
        </div>
    )
}

export default Search