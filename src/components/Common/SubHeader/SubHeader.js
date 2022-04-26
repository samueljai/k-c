import './subHeader.scss';

const SubHeader = ({ title }) => {
    return (
        <header className="subHeader">
            <h2>{title}</h2>
        </header>
    );
};

export default SubHeader;
