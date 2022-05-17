import { makeAutoObservable } from 'mobx';
import { fetchBeaches } from '../services/beachService';
import orderBy from 'lodash.orderby';
import { BeachItemProps } from '../components/Beaches/Components/BeachListItem/BeachListItem';

type BeachListType = BeachItemProps[] | null;
export type SortFieldType = 'name' | 'index';
export type SortOrderType = 'asc' | 'desc';

class BeachStore {
    _beachList: BeachListType = null;
    isLoading = false;
    hasError = false;
    sortField: SortFieldType = 'index';
    sortOrder: SortOrderType = 'asc';

    constructor() {
        makeAutoObservable(this);
    }

    fetchBeachList = () => {
        this.isLoading = true;
        fetchBeaches()
            .then(this.fetchBeachListSuccess)
            .catch(this.fetchBeachListError);
    };

    fetchBeachListSuccess = (beachList: BeachListType) => {
        this._beachList = beachList;
        this.hasError = false;
        this.isLoading = false;
    };

    fetchBeachListError = () => {
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

    sortByField = (sortField: SortFieldType) => {
        this.sortField = sortField;
    };

    sortByOrder = (sortOrder: SortOrderType) => {
        this.sortOrder = sortOrder;
    };
}

export default BeachStore;
