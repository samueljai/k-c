import React, { useEffect, useState } from 'react';
import { fetchFood } from '../api/food';
import FoodList from './FoodList/FoodList';
import './food.css';

const Food = (props) => {
    const [foodList, setFoodList] = useState(null);

    useEffect(() => {
        fetchFood().then((foodData) => setFoodList(foodData));
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
