import PropTypes from 'prop-types';
import Card from '../../../Common/Card/Card';
import Stars from '../../../Common/Stars/Stars';
import './foodListItem.scss';

const FoodListItem = ({ foodItem }) => {
    return (
        <li className="foodListItem">
            <Card imgSrc={foodItem.image} imgAlt="foodImage">
                <div className="foodListItem__info">
                    <h4>{foodItem.name}</h4>
                    <h5>{foodItem.origin}</h5>
                    <Stars numberOfStars={foodItem.starRating} />
                </div>
            </Card>
        </li>
    );
};

FoodListItem.propTypes = {
    foodItem: PropTypes.object,
};

export default FoodListItem;
