import './project-card.styles.css';

import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    return (
        <>
            {props.name ? (
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
                                target="_blank"
                            >
                                Website
                            </Link>
                            <Link
                                className="link-item"
                                to={`${props.projectRepo}`}
                                target="_blank"
                            >
                                Repository
                            </Link>
                        </div>
                        <p>{props.explanation}</p>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
        </>
    );
};

export default ProjectCard;
