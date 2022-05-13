import './card.scss';

type CardProps = {
    children: React.ReactNode;
    imgSrc: string;
    imgAlt: string;
};

const Card = ({ children, imgSrc, imgAlt }: CardProps) => {
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

export default Card;
