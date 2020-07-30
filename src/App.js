import React, {useState, useEffect} from 'react';
import Cards from './components/Cards'
import SubHeader from './components/Subheader'
import Input from './components/Input'
import Buttons from './components/Buttons'
import Result from './components/Result'
import Context from './context'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCoins } from './redux/coin/coinActions'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

function App() {
  const coins = useSelector( state => state.coins)
  const loading = useSelector( state => state.loading)
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const [coin, setCoin] = useState('BTC')
  const [button, setButton] = useState('USD')
  const [inputValue, setInputValue] = useState(0)
  const [imgs] = useState([
    'https://endotech.io/img/coinicon/BTC.png',
    'https://endotech.io/img/coinicon/ETH.png',
    'https://endotech.io/img/coinicon/XRP.png'
  ])

  useEffect( () => {
    dispatch(fetchCoins())
    setData(Object.entries(coins))
  }, [coins, dispatch])

  for(let i = 0; i <= data.length - 1; ++i) {
      data[i].push(imgs[i])
  }

  const selectedCoin = (name) => {
    setCoin(name)
  }

  const buttonTitle = (title) => {
    setButton(title)
  }

  const inputValueHandlerMain = (value) => {
    setInputValue(value)
  }
  
  return (
      loading
      ? <Loader type="Rings" visible={true} color="#00BFFF" height={80} width={80} />
      : <Context.Provider value={{
        selectedCoin, buttonTitle, inputValueHandlerMain,
        coin, data, button, inputValue
      }}>
        <Cards />
        <SubHeader />
        <Input />
        <Buttons />
        <Result />
      </Context.Provider>
  );
}
export default App;
