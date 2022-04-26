import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ children, imgSrc, imgAlt }) => {
    return (
        <article className="card">
            <div className="card__imageOuter">
                <div className="card__imageContainer">
                    <img className="card__image" alt={imgAlt} src={imgSrc} />
                </div>
            </div>
            <div className="card__info">{children}</div>
        </article>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
};

export default Card;
