import React, { useEffect, useState } from 'react';
import { fetchFood } from '../api/food';
import FoodList from './FoodList/FoodList';

const Food = (props) => {
    const [foodList, setFoodList] = useState(null);

    async function getFoodData() {
        const data = await fetchFood();
        setFoodList(data);
    }

    useEffect(() => {
        getFoodData();
    }, []);

    if (!foodList) {
        return null;
    }

    return (
        <div className="food">
            <FoodList foodList={foodList} />
        </div>
    );
};

export default Food;
