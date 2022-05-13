import Star from './Star';
import './stars.scss';

type StarsProps = {
    numberOfStars: number;
};

const Stars = ({ numberOfStars }: StarsProps) => {
    let stars = new Array(numberOfStars).fill(1);

    return (
        <ul className="stars">
            {stars && stars.map((_star, index) => <Star key={index} />)}
        </ul>
    );
};

export default Stars;
