const Button = ({ buttonText, onClick, className, dataTestId, style }) => {
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
