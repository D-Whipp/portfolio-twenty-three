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
                <Link
                    className="link"
                    to="https://docs.google.com/document/d/1Jy9tSvL4Vz3kQSIqHS7sitXvs6f2Jhyd17FMgox3Qpo/edit?usp=sharing"
                    target="_blank"
                >
                    Resume
                </Link>
                <Link
                    className="link"
                    to="https://github.com/D-Whipp"
                    target="_blank"
                >
                    Github
                </Link>
                <Link
                    className="link"
                    to="https://www.linkedin.com/in/david-w-079841213/"
                    target="_blank"
                >
                    LinkedIn
                </Link>
            </div>
        </div>
    );
};

export default Navigation;
