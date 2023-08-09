import './mobile-navigation.styles.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const MobileNavigation = () => {
    const [mobileNavToggle, setMobileNavToggle] = useState(false);

    const toggleMobileNavigationFunction = () =>
        setMobileNavToggle(!mobileNavToggle);

    return (
        <>
            <div
                className="hamburger-menu-container"
                onClick={toggleMobileNavigationFunction}
            >
                <div className="line-one"></div>
                <div className="line-two"></div>
                <div className="line-three"></div>
            </div>
            <div className="mobile-navigation-container">
                <div className="mobile-nav-link" to="/">
                    About
                </div>
                <div className="mobile-nav-link" to="/pages/projects">
                    Projects
                </div>
                <div
                    className="mobile-nav-link"
                    to="https://docs.google.com/document/d/1Jy9tSvL4Vz3kQSIqHS7sitXvs6f2Jhyd17FMgox3Qpo/edit?usp=sharing"
                    target="_blank"
                >
                    Resume
                </div>
                <div
                    className="mobile-nav-link"
                    to="https://github.com/D-Whipp"
                    target="_blank"
                >
                    Github
                </div>
                <div
                    className="mobile-nav-link"
                    to="https://www.linkedin.com/in/david-w-079841213/"
                    target="_blank"
                >
                    LinkedIn
                </div>
            </div>
        </>
    );
};

export default MobileNavigation;
