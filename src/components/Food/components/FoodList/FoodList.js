import PropTypes from 'prop-types';
import FoodListItem from '../FoodListItem/FoodListItem';
import './foodList.scss';

const FoodList = ({ foodList }) => {
    return (
        <ul className="foodlist" data-testid="foodlist">
            {foodList.map((foodItem) => (
                <FoodListItem foodItem={foodItem} key={foodItem.id} />
            ))}
        </ul>
    );
};

FoodList.propTypes = {
    foodList: PropTypes.array,
};

export default FoodList;
