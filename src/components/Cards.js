import React, {useContext} from 'react'
import Card from './Card'
import Context from '../context'
import '../Card.css'

const Cards = () => {
    const {selectedCoin, data} = useContext(Context)
    return (
        <div>
            <div className="cards">
                { data.map((dataList, index) => {
                    return (
                        <Card key={index} dataList={dataList} selectedCoin={selectedCoin}/>
                    )
                } )}
            </div>
        </div>
    )
}

export default Cards