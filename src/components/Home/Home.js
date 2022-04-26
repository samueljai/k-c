import GlobalLayout from '../../Layout/GlobalLayout';
import ArticleCard from '../Common/ArticleCard/ArticleCard';
import './home.scss';

function Home() {
    return (
        <GlobalLayout>
            <main className="home">
                <section className="home__articleList">
                    <ArticleCard
                        to="/food"
                        imgSrc="https://pair-programming-test.s3.eu-west-2.amazonaws.com/images/chicken-jalfrezi.png"
                        imgAlt="foodImage"
                        title="Food"
                    />
                    <ArticleCard
                        to="/beaches"
                        imgSrc="https://img.delicious.com.au/quCP16aS/del/2019/09/hahei-bay-new-zealand-114893-2.jpg"
                        imgAlt="beachImage"
                        title="Beaches"
                    />
                </section>
            </main>
        </GlobalLayout>
    );
}

export default Home;
