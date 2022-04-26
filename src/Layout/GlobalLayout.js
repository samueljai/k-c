import Header from '../components/Common/Header/Header';
import './globalLayout.scss';

function GlobalLayout(props) {
    return (
        <div className="globalLayout">
            <Header title="Best of the World" />
            <div className="globalLayout__content">{props.children}</div>
        </div>
    );
}

export default GlobalLayout;
