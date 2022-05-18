import { render, fireEvent, RenderResult } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    let testingUtils: RenderResult<
        typeof import('@testing-library/dom/types/queries'),
        HTMLElement
    >;
    const handleClick = jest.fn();
    const buttonProps = {
        buttonText: 'Click Me',
        className: `testClassname`,
        dataTestId: `testDataId`,
        onClick: handleClick,
    };

    beforeEach(() => {
        testingUtils = render(<Button {...buttonProps} />);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders a button element with the correct button text prop', () => {
        const { getByRole } = testingUtils;
        const button = getByRole('button');
        expect(button).toHaveTextContent(buttonProps.buttonText);
    });
    it('renders a button element with the correct testId prop', () => {
        const { getByRole } = testingUtils;
        const button = getByRole('button');
        expect(button).toHaveAttribute('data-testid', buttonProps.dataTestId);
    });
    it('renders a button element with the correct classname prop', () => {
        const { getByRole } = testingUtils;
        const button = getByRole('button');
        expect(button).toHaveClass(buttonProps.className);
    });
    it('renders a button element and calls the onClick prop when clicked', () => {
        const { getByRole } = testingUtils;
        const button = getByRole('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
