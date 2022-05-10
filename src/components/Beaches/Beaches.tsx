import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRootStore } from '../../providers/RootStoreProvider';
import Loading from '../Common/Loading/Loading';
import Error from '../Common/Error/Error';
import GlobalLayout from '../Layout/GlobalLayout';
import SubHeader from '../Common/SubHeader/SubHeader';
import SortBy from '../Common/Sort/SortBy';
import BeachList from './Components/BeachList/BeachList';
import './beaches.scss';

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

    const handleSortFieldChange = (sortField: string) => {
        sortByField(sortField);
    };

    const handleSortOrderChange = (sortOrder: string) => {
        sortByOrder(sortOrder);
    };

    const sortFieldButtons = [
        {
            text: 'Rating',
            currentlySelected: sortField,
            sortField: 'index',
            onClick: handleSortFieldChange,
        },
        {
            text: 'Name',
            currentlySelected: sortField,
            sortField: 'name',
            onClick: handleSortFieldChange,
        },
    ];

    const sortOrderButtons = [
        {
            text: 'Asc',
            currentlySelected: sortOrder,
            sortField: 'asc',
            onClick: handleSortOrderChange,
        },
        {
            text: 'Desc',
            currentlySelected: sortOrder,
            sortField: 'desc',
            onClick: handleSortOrderChange,
        },
    ];

    return (
        <GlobalLayout>
            <article className="beaches">
                <SubHeader title="Beaches" />
                <section className="beaches__content">
                    <div className="beaches__sortBy">
                        <SortBy
                            classname="field"
                            testId="field"
                            sortButtons={sortFieldButtons}
                        />
                        <SortBy
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
