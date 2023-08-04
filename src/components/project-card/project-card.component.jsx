import './project-card.styles.css';

import { Link } from 'react-router-dom';

const ProjectCard = (props) => {

    return (
        <div className="info-card-container">
            <div id="image-container">
                <img src={props.imgUrl} alt={props.name} />
            </div>

            <div id="info-text">
                <h2>{props.name}</h2>
                <h4>{props.tech}</h4>
                <div className="links-container">
                    <Link
                        className="link-item"
                        to={`${props.projectSite}`}
                    >
                        Website
                    </Link>
                    <Link
                        className="link-item"
                        to={`${props.projectRepo}`}
                    >
                        Repository
                    </Link>
                </div>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
