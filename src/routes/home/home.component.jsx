import './home.styles.css';

import About from '../../components/about/about.component';
import Navigation from '../navbar/navigation.component';

const Home = () => {
    return (
        <>
            <Navigation />
            <About />
            <div className="home-container">
                Email me: <span className='white-text'>dwhipp88@gmail.com</span>
            </div>
        </>
    );
};

export default Home;
