import React, {useState, useEffect, useContext} from 'react'
import Context from '../context'
import axios from 'axios'

const Result = () => {
    const [res, setRes] = useState({})
    const {button, inputValue, coin} = useContext(Context)
    useEffect( () => {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,UAH,RUB')
        .then( res => setRes(res.data))
      }, [res])
        
    return (
        <div>
            <p>{inputValue} {coin}  will be {inputValue * (res[coin] && res[coin][button])} {button}</p>
        </div>
    )
}

export default Result