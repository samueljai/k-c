import './subHeader.scss';

type SubHeaderProps = {
    title: string;
};

const SubHeader = ({ title }: SubHeaderProps) => {
    return (
        <header className="subHeader">
            <h2>{title}</h2>
        </header>
    );
};

export default SubHeader;
