import './project-card.styles.css';

import data from '../../data.json';

const ProjectCard = () => {
    console.log('data-card: ', data[0].name)

    return (
        <div className='project-card-container'>
            <h2>{data[0].name}</h2>
            <p>{data[0].githubRepository}</p>
            <p>{data[0].deployedSite}</p>
            <img src={data[0].imageUrl} alt={data[0].name} />
            <p>{data[0].technologyUsed}</p>
            <p>{data[0].briefExplanation}</p>
        </div>
    )
}

export default ProjectCard;