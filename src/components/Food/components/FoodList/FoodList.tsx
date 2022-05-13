import FoodListItem, { FoodItemProps } from '../FoodListItem/FoodListItem';
import './foodList.scss';

type FoodListProps = {
    foodList: FoodItemProps[];
};

const FoodList = ({ foodList }: FoodListProps) => {
    return (
        <ul className="foodlist" data-testid="foodlist">
            {foodList &&
                foodList.map((foodItem) => (
                    <FoodListItem foodItem={foodItem} key={foodItem.id} />
                ))}
        </ul>
    );
};

export default FoodList;
