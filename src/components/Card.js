import React from 'react'
import '../Card.css'

const Card = ({dataList, selectedCoin}) => {
    return (
               <div className="card" onClick={() => selectedCoin(dataList[0])}>
                    <div className="keyData">
                        {dataList[0]}
                    </div>
                    <div>
                        <img src={dataList[2]} alt={dataList[0]}/>
                    </div>
                    <div className="ValueData">
                        {Object.entries(dataList[1]).map((valueList, index) =>
                            <div className="rowValue" key={index}>
                                {valueList[0]} : {valueList[1]}
                            </div>
                        )}
                    </div>
               </div>
    )
}

export default Card