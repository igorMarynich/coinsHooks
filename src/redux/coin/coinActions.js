import {FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE} from './coinTypes'
import axios from 'axios'

export const fetchCoinsRequest = () => {
    return {
        type: FETCH_COINS_REQUEST
    }
}

export const fetchCoinsSuccess = data => {
    return {
        type: FETCH_COINS_SUCCESS,
        payload: data
    }
}

export const fetchCoinsFailure = error => {
    return {
        type: FETCH_COINS_FAILURE,
        payload: error
    }
}

export const fetchCoins = () => {
    return (dispatch) => {
        dispatch(fetchCoinsRequest)
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,UAH,RUB')
            .then( response => {
                const coins = response.data
                dispatch(fetchCoinsSuccess(coins))
            })
            .catch ( error => {
                const errorMessage = error.message
                dispatch(fetchCoinsFailure(errorMessage))
            })
    }
}