import PropTypes from 'prop-types';
import BeachListItem from '../BeachListItem/BeachListItem';
import './beachList.scss';

const BeachList = ({ beachList }) => {
    return (
        <ul className="beachList" data-testid="beachList">
            {beachList.map((beachItem) => (
                <BeachListItem beachItem={beachItem} key={beachItem.index} />
            ))}
        </ul>
    );
};

BeachList.propTypes = {
    beachList: PropTypes.array,
};

export default BeachList;
