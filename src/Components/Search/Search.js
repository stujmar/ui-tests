import React, { useState, useEffect } from "react"
import axios from 'axios';
import { head, body } from '../Universal.module.css'
import {flexBody, left, right, searchBar} from './Search.module.css'
import StockResult from './StockResult'

const Search = () => {
    let divArray;
    // Active Search Term
    const [query, setQuery] = useState('');
    // Where we put the data from the axios call.
    const [data, setData] = useState();
    // data mapped to componenents to display search results.
    const [results, setResults] = useState([]);
    // Objects from query what user clicked watchlist on.
    const [watchList, setWatchList] = useState([]);
    // Components mapped from watclist data to display.
    const [display, setDisplay] = useState([])
 
    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const addToWaitlist = (data) => {
        console.log("d", data);
        console.log("W", watchList);
        // console.log(watchList.filter(x => x === data));
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
              // Watchlist getting clogged up with data some how trying to clear it here.
              setWatchList([]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[watchList]);

    return (
        <div className={body}>
            
            <h2 className={head}>Search</h2>
            <form className={searchBar}>
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