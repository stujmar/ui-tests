import React, { useState, useEffect } from "react"
import axios from 'axios';
import { head, body } from '../Universal.module.css'
import {flexBody, left, right} from './Search.module.css'
import StockResult from './StockResult'

const Search = () => {
    let divArray;
    const [query, setQuery] = useState('');
    const [data, setData] = useState();
    const [results, setResults] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [display, setDisplay] = useState([])
 
    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const addToWaitlist = (data) => {
        setWatchList([...watchList, data]);
    };

    useEffect(() => {
        console.log("querying:", query);
        let url = "https://api.polygon.io/v2/reference/tickers?apiKey=5pIvRZ87rHbQoMwQTX5fERfYQYKBf9sU&search="
        if (query) {
            axios.get(`${url}${query}`)
            .then(res => {
              const stonks = res.data;
              setData(stonks.tickers);
              console.log("query complete:", query);
            })
        }
    }, [query])

    useEffect(() => {
        if (data) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        divArray = data.map((item) => {
                return <StockResult key={item.ticker} data={item} onClick={addToWaitlist} />
            })
            setResults(divArray);
        }
    },[data]);

    useEffect(() => {
        if (watchList) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        let saved = watchList.map((item) => {
                return <div>{item.ticker}</div>
            })
        setDisplay([...display, saved]);   
        }
    },[watchList]);

    // useEffect(() => {
    //     if (data) {
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     divArray = data.map((item) => {
    //             return <StockResult data={item} onClick={addToWaitlist} />
    //         })
    //         setResults(divArray);
    //     }
    // },[data]);

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
            <div className={flexBody}>
                <div className={left} ><div>Results</div>{results}</div>
                <div className={right}>Watchlist{display}</div>
            </div>
         
        </div>
    )
}

export default Search