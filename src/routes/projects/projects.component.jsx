import './projects.styles.css';

import Navigation from '../navbar/navigation.component';
import ProjectCard from '../../components/project-card/project-card.component';

import data from '../../data.json';

const Projects = () => {
    return (
        <>
            <Navigation />
            <div className="projects-container">
                {data.map((project) => (
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        imgUrl={project.imageUrl}
                        projectRepo={project.githubRepository}
                        projectSite={project.deployedSite}
                        tech={project.technologyUsed}
                        explanation={project.briefExplanation}
                    />
                ))}

                <ProjectCard />
            </div>
        </>
    );
};

export default Projects;
