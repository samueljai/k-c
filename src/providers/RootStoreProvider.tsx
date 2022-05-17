import {
    createContext,
    useContext,
    FC,
    ReactNode,
    ReactElement,
    ComponentType,
} from 'react';
import RootStore from '../stores/RootStore';

export const RootStoreContext = createContext<RootStore>({} as RootStore);

export type RootStoreComponent = FC<{
    rootStore: RootStore;
    children: ReactNode;
}>;

export const RootStoreProvider: RootStoreComponent = ({
    children,
    rootStore,
}): ReactElement => {
    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    );
};

export const useRootStore = () => useContext(RootStoreContext);

type TWithRootStoreHOC = <P extends unknown>(
    Component: ComponentType<P>
) => (props: P) => JSX.Element;

export const withRootStore: TWithRootStoreHOC =
    (WrappedComponent) => (props) => {
        return <WrappedComponent {...props} rootStore={useRootStore()} />;
    };
