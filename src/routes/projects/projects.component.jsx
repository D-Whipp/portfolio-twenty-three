import './projects.styles.css';

import Navigation from '../navbar/navigation.component';
import ProjectCard from '../../components/project-card/project-card.component';

import data from '../../data.json';

const Projects = () => {
    console.log('data: ', data);

    return (
        <>
            <Navigation />
            <div className="projects-container">
                {data.map((project) => (
                    <h3 key={project.id}>{project.name}</h3>
                ))}
            



                <ProjectCard />




                </div>
        </>
    );
};

export default Projects;
