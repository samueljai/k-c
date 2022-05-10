import Header from '../Common/Header/Header';
import './globalLayout.scss';

type GlobalLayoutProps = {
    children: React.ReactNode;
};

function GlobalLayout({ children }: GlobalLayoutProps) {
    return (
        <div className="globalLayout">
            <Header title="Best of the World" />
            <div className="globalLayout__content">{children}</div>
        </div>
    );
}

export default GlobalLayout;
