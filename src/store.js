import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import coinReducer from './redux/coin/coinReducer'

const store = createStore(coinReducer, applyMiddleware(thunk))

export default store