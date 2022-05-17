import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRootStore } from '../../providers/RootStoreProvider';
import { SortFieldType, SortOrderType } from '../../stores/BeachStore';
import Loading from '../Common/Loading/Loading';
import Error from '../Common/Error/Error';
import GlobalLayout from '../Layout/GlobalLayout';
import SubHeader from '../Common/SubHeader/SubHeader';
import SortBy from '../Common/Sort/SortBy';
import { SortButtonType } from '../Common/Sort/SortButton';
import BeachList from './Components/BeachList/BeachList';
import './beaches.scss';

type SortFieldButtonsType = SortButtonType<SortFieldType>[];
type SortOrderButtonsType = SortButtonType<SortOrderType>[];

const Beaches = () => {
    const {
        beachStore: {
            fetchBeachList,
            isLoading,
            hasError,
            beachList,
            sortField,
            sortOrder,
            sortByField,
            sortByOrder,
        },
    } = useRootStore();

    useEffect(() => {
        !beachList.length && fetchBeachList();
    }, [beachList, fetchBeachList]);

    if (isLoading) {
        return <Loading />;
    }

    if (hasError) {
        return <Error />;
    }

    const handleSortFieldChange = (sortValue: SortFieldType) => {
        sortByField(sortValue);
    };

    const handleSortOrderChange = (sortValue: SortOrderType) => {
        sortByOrder(sortValue);
    };

    const sortFieldButtons: SortFieldButtonsType = [
        {
            text: 'Rating',
            currentlySelected: sortField,
            sortValue: 'index',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Name',
            currentlySelected: sortField,
            sortValue: 'name',
            onClick: handleSortFieldChange,
        },
    ];

    const sortOrderButtons: SortOrderButtonsType = [
        {
            text: 'Asc',
            currentlySelected: sortOrder,
            sortValue: 'asc',
            onClick: handleSortOrderChange,
        },
        {
            text: 'Desc',
            currentlySelected: sortOrder,
            sortValue: 'desc',
            onClick: handleSortOrderChange,
        },
    ];

    return (
        <GlobalLayout>
            <article className="beaches">
                <SubHeader title="Beaches" />
                <section className="beaches__content">
                    <div className="beaches__sortBy">
                        <SortBy<SortFieldType>
                            classname="field"
                            testId="field"
                            sortButtons={sortFieldButtons}
                        />
                        <SortBy<SortOrderType>
                            classname="order"
                            testId="order"
                            sortButtons={sortOrderButtons}
                        />
                    </div>
                    <BeachList beachList={beachList} />
                </section>
            </article>
        </GlobalLayout>
    );
};

export default observer(Beaches);
