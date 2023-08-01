import './home.styles.css';

import About from '../../components/about/about.component';
import Navigation from '../navbar/navigation.component';

const Home = () => {
    return (
        <>
            <Navigation />
            <About />
            <div className="home-container">Home is listening</div>
        </>
    );
};

export default Home;
