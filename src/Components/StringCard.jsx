import React from 'react'
import './Card.css'

const StringCard = ({input , output , time}) => {
    return (
        <div className='card' >
            <p>Input: {input}</p>
            <p>Output: {output} </p>
            <p>Length: {output.length} </p>
            <p>Time: {time}</p>
        </div>
    )
}

export default StringCard
