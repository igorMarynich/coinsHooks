import React, {useState, useContext} from 'react'
import Context from '../context'
import '../Card.css'

const Buttons = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const {data, buttonTitle} = useContext(Context)

    const handleOnClick = (index, button) => {
        setActiveIndex(index);
        buttonTitle(button)
      };

    const titleButton = []
    data.map( button => button.map( el => titleButton.push(el)))
    const title = titleButton[1] && Object.keys(titleButton[1])

    return (
        <div>
            {title && title.map((button, index) => (
                        <button
                            key={index}
                            onClick={ () => handleOnClick(index, button)}
                            className={activeIndex === index ? "active" : "button"}
                            >
                                {button}
                        </button>
            ))}
        </div>
    )
}

export default Buttons