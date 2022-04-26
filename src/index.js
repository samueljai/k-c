import React from 'react';
import ReactDOM from 'react-dom';
import RootStore from './stores/RootStore';
import { RootStoreProvider } from './providers/RootStoreProvider';
import App from './routes/App';
import './index.scss';

const rootStore = new RootStore();

ReactDOM.render(
    <React.StrictMode>
        <RootStoreProvider rootStore={rootStore}>
            <App />
        </RootStoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
