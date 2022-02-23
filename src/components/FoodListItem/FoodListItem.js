import React from 'react';
import PropTypes from 'prop-types';
import './foodListItem.scss';
import Stars from './components/Stars/Stars';

const FoodListItem = ({ foodItem }) => {
    return (
        <li className="foodListItem">
            <div className="foodListItem__imageOuter">
                <div className="foodListItem__imageContainer">
                    <img
                        className="foodListItem__image"
                        alt="foodImage"
                        src={foodItem.image}
                    />
                </div>
            </div>
            <div className="foodListItem__info">
                <h4>{foodItem.name}</h4>
                <h5>{foodItem.origin}</h5>
                <Stars numberOfStars={foodItem.starRating} />
            </div>
        </li>
    );
};

FoodListItem.propTypes = {
    foodItem: PropTypes.object,
};

export default FoodListItem;
