import React from 'react'
import './card.css'

export const Card = ({monster}) => {
    return (
        <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${monster.id}?set=set5&size=180x180`} />
            <h2>{monster.name}</h2>
            <h5>{monster.email}</h5>
        </div>
    )
}