import { FETCH_COINS_REQUEST, FETCH_COINS_SUCCESS, FETCH_COINS_FAILURE } from './coinTypes'
const initialState = {
    loading: false,
    coins: [],
    error: ''
}

const coinReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COINS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COINS_SUCCESS:
            return {
                loading: false,
                coins: action.payload,
                error: ''
            }
        case FETCH_COINS_FAILURE:
            return {
                loading: false,
                coins: [],
                erorr: action.payload
            }
        default:
            return state
    }
}

export default coinReducer