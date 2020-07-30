import React, {useState, useContext} from 'react'
import Context from '../context'
import '../Card.css'

const Input = () => {

    const [value, setValue] = useState(0)

    const {inputValueHandlerMain} = useContext(Context)

    const inputValueHandler = (e) => {
        if( e.target.value >= 0) {
            setValue(e.target.value)
            inputValueHandlerMain(e.target.value)
        }
    }
    return (
        <div className="inputValue">
            <p>Value :</p>
            <input type="number" value={value} onChange={inputValueHandler} />
        </div>
    )
}

export default Input