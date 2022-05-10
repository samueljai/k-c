import { Link } from 'react-router-dom';
import './articleCard.scss';

type ArticleCardProps = {
    to: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
};

const ArticleCard = ({ to, imgSrc, imgAlt, title }: ArticleCardProps) => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#28262e',
    };

    return (
        <article className="articleCard">
            <Link to={to} style={linkStyle}>
                <div
                    className="articleCard__inner"
                    data-testid={`article-${title}`}
                >
                    <div className="articleCard__imageContainer">
                        <img
                            className="articleCard__image"
                            src={imgSrc}
                            alt={imgAlt}
                        />
                    </div>
                    <h4 className="articleCard__title">{title}</h4>
                </div>
            </Link>
        </article>
    );
};

export default ArticleCard;
