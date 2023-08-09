import './home.styles.css';

import About from '../../components/about/about.component';
import Navigation from '../navbar/navigation.component';
import MobileNavigation from '../mobile-navigation/mobile-navigation.component';

const Home = () => {
    return (
        <>
            <Navigation />
            <MobileNavigation />
            <About />
            <div className="home-container">
                Email me:{' '}
                <span className="white-text">
                    <a href="mailto:dwhipp88@gmail.com">
                        dwhipp88@gmail.com
                    </a>
                </span>
            </div>
        </>
    );
};

export default Home;
