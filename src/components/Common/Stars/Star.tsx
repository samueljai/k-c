import { getImage } from '../../../Images/images';
import './star.scss';

const Star = () => {
    return <img className="star__image" alt="star" src={getImage('star')} />;
};

export default Star;
