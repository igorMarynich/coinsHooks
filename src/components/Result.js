import React, {useState, useEffect, useContext} from 'react'
import Context from '../context'
import axios from 'axios'

const Result = () => {
    const [res, setRes] = useState({})
    const {button, inputValue, coin} = useContext(Context)
    useEffect( () => {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,UAH,RUB')
        .then( res => setRes(res.data))
      }, [])
        const newArr = res[coin] &&  res[coin][button]
        const result = () => {
            return inputValue * newArr
        }
    return (
        <div>
            <p>{inputValue} {coin}  will be {result()} {button}</p>
        </div>
    )
}

export default Result