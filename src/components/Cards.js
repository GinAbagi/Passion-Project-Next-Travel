import React from 'react';
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem
                        src="images/img-9.jpg"
                        text="explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path="/services" />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
