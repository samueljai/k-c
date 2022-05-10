type ButtonProps = {
    buttonText: string;
    onClick: React.MouseEventHandler;
    className: string;
    dataTestId: string;
    style?: object;
};

const Button = ({
    buttonText,
    onClick,
    className,
    dataTestId,
    style,
}: ButtonProps) => {
    return (
        <button
            data-testid={dataTestId}
            className={className}
            onClick={onClick}
            style={style}
        >
            {buttonText}
        </button>
    );
};

export default Button;
