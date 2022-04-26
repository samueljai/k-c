import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    it('renders a button element with the correct button text prop', () => {
        const buttonProps = {
            buttonText: 'Click Me',
        };

        render(<Button {...buttonProps} />);

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent(buttonProps.buttonText);
    });
    it('renders a button element with the correct testId prop', () => {
        const buttonProps = {
            buttonText: 'Click Me',
            dataTestId: `testDataId`,
        };

        render(<Button {...buttonProps} />);

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('data-testid', buttonProps.dataTestId);
    });
    it('renders a button element with the correct classname prop', () => {
        const buttonProps = {
            buttonText: 'Click Me',
            className: `testClassname`,
        };

        render(<Button {...buttonProps} />);

        const button = screen.getByRole('button');
        expect(button).toHaveClass(buttonProps.className);
    });
    it('renders a button element and calls the onClick prop when clicked', () => {
        const handleClick = jest.fn();
        const buttonProps = {
            buttonText: 'Click Me',
            onClick: handleClick,
        };

        render(<Button {...buttonProps} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
