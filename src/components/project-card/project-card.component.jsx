import './project-card.styles.css';

import data from '../../data.json';

import { Link } from 'react-router-dom';

const ProjectCard = () => {
    console.log('data-card: ', data[0].name);

    return (
        <div className="infoCardContainer">
            <div id="image-container">
                <img src={data[0].imageUrl} alt={data[0].name} />
            </div>

            <div id="infoText">
                <h2>Heading</h2>
                <h4>Sub-Heading</h4>
                <div className="links-container">
                    <Link className="link-item" to="#">
                        Link
                    </Link>
                    <Link className="link-item" to="#">
                        Link
                    </Link>
                    <Link className="link-item" to="#">
                        Link
                    </Link>
                </div>
            </div>
        </div>
    );
};

// <div
//     style={{ backgroundImage: `url(${data[0].imageUrl})` }}
//     className="project-card-container"
// >
//     <div className="card-data">
//         <h2>{data[0].name}</h2>
//         <p>{data[0].githubRepository}</p>
//         <p>{data[0].deployedSite}</p>
//         <p>{data[0].technologyUsed}</p>
//         <p>{data[0].briefExplanation}</p>
//     </div>
// </div>
// <img src={data[0].imageUrl} alt={data[0].name} />
export default ProjectCard;
