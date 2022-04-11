import React from 'react';
import ReactDOM from 'react-dom';
import RootStore from './stores/RootStore';
import { RootStoreProvider } from './providers/RootStoreProvider';
import Food from './components/Food';
import './index.css';

const rootStore = new RootStore();

ReactDOM.render(
    <React.StrictMode>
        <RootStoreProvider rootStore={rootStore}>
            <Food />
        </RootStoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
