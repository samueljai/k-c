import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import './stars.scss';

const Stars = (props) => {
    let stars = new Array(props.numberOfStars).fill(1);

    return (
        <ul className="stars">
            {stars && stars.map((_star, index) => <Star key={index} />)}
        </ul>
    );
};

Stars.propTypes = {
    numberOfStars: PropTypes.number,
};

export default Stars;
