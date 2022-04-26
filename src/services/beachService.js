import { getBeachListData } from '../data/beachData';

const errorMessage = 'Error fetching data';

function fetchBeaches() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const beachListData = getBeachListData();

            if (beachListData) {
                resolve(beachListData);
            } else {
                reject(errorMessage);
            }
        }, 1000);
    });
}

export { fetchBeaches, errorMessage };
