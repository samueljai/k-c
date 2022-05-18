import { RootStoreProvider } from '../../providers/RootStoreProvider';
import RootStore from '../../stores/RootStore';
import {
    render,
    waitForElementToBeRemoved,
    screen,
} from '@testing-library/react';
import Beaches from './Beaches';

// Fake timers using Jest
beforeEach(() => {
    jest.useFakeTimers();
});

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

describe('Food List', () => {
    it('renders a loading spinner, then a header, and beach list component once loaded', async () => {
        const rootStore = new RootStore();

        render(
            <RootStoreProvider rootStore={rootStore}>
                <Beaches />
            </RootStoreProvider>
        );

        expect(screen.getByTestId('loadingSpinner')).toBeInTheDocument();
        await waitForElementToBeRemoved(() =>
            screen.getByTestId('loadingSpinner')
        );

        expect(screen.getByText('Beaches')).toBeInTheDocument();
        expect(screen.getByTestId('beachList')).toBeInTheDocument();
    });
});
