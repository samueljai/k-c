import PropTypes from 'prop-types';
import Card from '../../../Common/Card/Card';
import './beachListItem.scss';

export type BeachItemProps = {
    index: number;
    image: string;
    name: string;
    description: string;
};

type BeachListItemProps = {
    beachItem: BeachItemProps;
};

const BeachListItem = ({ beachItem }: BeachListItemProps) => {
    return (
        <li className="beachListItem">
            <Card imgSrc={beachItem.image} imgAlt="beachImage">
                <div className="beachListItem__info">
                    <h4 className="beachListItem__infoName">
                        {beachItem.index}. {beachItem.name}
                    </h4>
                    <h5 className="beachListItem__infoDescription">
                        {beachItem.description}
                    </h5>
                </div>
            </Card>
        </li>
    );
};

BeachListItem.propTypes = {
    beachItem: PropTypes.object,
};

export default BeachListItem;
