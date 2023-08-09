import './projects.styles.css';

import Navigation from '../navbar/navigation.component';
import MobileNavigation from '../mobile-navigation/mobile-navigation.component';
import ProjectCard from '../../components/project-card/project-card.component';

import data from '../../data.json';

const Projects = () => {
    return (
        <>
            <Navigation />
            <MobileNavigation />
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
            </div>
        </>
    );
};

export default Projects;
