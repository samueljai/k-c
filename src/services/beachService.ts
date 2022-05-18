import { getBeachListData } from '../data/beachData';
import { BeachItemProps } from '../components/Beaches/Components/BeachListItem/BeachListItem';

const errorMessage = 'Error fetching data';

function fetchBeaches(returnData = true): Promise<BeachItemProps[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const beachListData = getBeachListData(returnData);

            if (beachListData) {
                resolve(beachListData.beachList);
            } else {
                reject(errorMessage);
            }
        }, 1000);
    });
}

export { fetchBeaches, errorMessage };
