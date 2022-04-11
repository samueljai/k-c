import './loading.scss';

const Loading = () => {
    return (
        <section className="loading">
            <div className="loadingSpinner" data-testid="loadingSpinner">
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
            </div>
        </section>
    );
};

export default Loading;
