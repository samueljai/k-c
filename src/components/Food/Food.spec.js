import { RootStoreProvider } from '../../providers/RootStoreProvider';
import RootStore from '../../stores/RootStore';
import {
    render,
    waitForElementToBeRemoved,
    screen,
} from '@testing-library/react';
import Food from './Food';

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
    it('renders a loading spinner, then a header, sort by and food list component once loaded', async () => {
        const rootStore = new RootStore();

        render(
            <RootStoreProvider rootStore={rootStore}>
                <Food />
            </RootStoreProvider>
        );

        expect(screen.getByTestId('loadingSpinner')).toBeInTheDocument();
        await waitForElementToBeRemoved(() =>
            screen.getByTestId('loadingSpinner')
        );

        expect(screen.getByText('Food')).toBeInTheDocument();
        expect(
            screen.getAllByTestId(new RegExp(`sortBy__`, 'i')).length
        ).toBeGreaterThan(0);
        expect(screen.getByTestId('foodlist')).toBeInTheDocument();
    });
});
