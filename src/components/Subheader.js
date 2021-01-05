import React, {useContext} from 'react'
import Context from '../context'

const Subheader = () => {
    const {coin} = useContext(Context)
    return (
        <div>
            <h1>Selected coin: {coin} </h1>
        </div>
    )
}

export default Subheader