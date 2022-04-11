import React from 'react';

const RootStoreContext = React.createContext();

export const RootStoreProvider = ({ children, rootStore }) => {
    return (
        <RootStoreContext.Provider value={rootStore}>
            {children}
        </RootStoreContext.Provider>
    );
};

export const useRootStore = () => React.useContext(RootStoreContext);

export const withRootStore = (Component) => (props) => {
    return <Component {...props} rootStore={useRootStore()} />;
};
