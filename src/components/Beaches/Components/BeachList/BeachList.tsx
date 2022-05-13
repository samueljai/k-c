import BeachListItem, { BeachItemProps } from '../BeachListItem/BeachListItem';
import './beachList.scss';

type BeachListProps = {
    beachList: BeachItemProps[];
};

const BeachList = ({ beachList }: BeachListProps) => {
    return (
        <ul className="beachList" data-testid="beachList">
            {beachList.map((beachItem) => (
                <BeachListItem beachItem={beachItem} key={beachItem.index} />
            ))}
        </ul>
    );
};

export default BeachList;
