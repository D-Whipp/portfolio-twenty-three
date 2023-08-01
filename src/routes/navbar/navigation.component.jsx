import './navigation.styles.css';

import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation-container">
            <div className="nav-links">
                <Link className="link" to="/">
                    About
                </Link>
                <Link className="link" to="/pages/projects">
                    Projects
                </Link>
                <Link className="link">Github</Link>
                <Link className="link">LinkedIn</Link>
            </div>
        </div>
    );
};

export default Navigation;
