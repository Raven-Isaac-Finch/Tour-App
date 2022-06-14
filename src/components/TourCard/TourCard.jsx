import React from "react";
import { data } from '../../data/data.js';
import './TourCard.css';

const TourCard = () => {
    return (
        <div className="card-container">
            {data.map((card) => {
                return (
                    <div className="card" key={card.id}>
                        <div className="title">
                            <h2>{card.title}</h2>
                        </div>
                        <img src={card.image} alt={card.title} />
                        <div className="card-over">
                            <p>{card.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TourCard;