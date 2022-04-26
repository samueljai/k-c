import { makeAutoObservable } from 'mobx';
import { fetchBeaches } from '../services/beachService';
import orderBy from 'lodash.orderby';

class BeachStore {
    _beachList = null;
    isLoading = false;
    hasError = false;
    beachListError = null;
    sortField = 'index';
    sortOrder = 'asc';

    constructor() {
        makeAutoObservable(this);
    }

    fetchBeachList = () => {
        this.isLoading = true;
        fetchBeaches()
            .then(this.fetchBeachListSuccess)
            .catch(this.fetchBeachListError);
    };

    fetchBeachListSuccess = ({ data }) => {
        this._beachList = data;
        this.hasError = false;
        this.isLoading = false;
    };

    fetchBeachListError = (error) => {
        this.beachListError = error;
        this.hasError = true;
        this.isLoading = false;
    };

    get beachList() {
        const orderedBeachList = orderBy(
            this._beachList,
            this.sortField,
            this.sortOrder
        );

        return orderedBeachList;
    }

    sortByField = (sortField) => {
        this.sortField = sortField;
    };

    sortByOrder = (sortOrder) => {
        this.sortOrder = sortOrder;
    };
}

export default BeachStore;
