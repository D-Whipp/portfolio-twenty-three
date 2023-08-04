import './projects.styles.css';

import Navigation from '../navbar/navigation.component';
import ProjectCard from '../../components/project-card/project-card.component';

import data from '../../data.json';
// <h3 key={project.id}>{project.name}</h3>
// const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r] = data;
// console.log('a:  ', a);
// console.log('b:  ', b);
// console.log('c:  ', c);
// console.log('d:  ', d);
// console.log('e:  ', e);
// console.log('f:  ', f);
// console.log('g:  ', g);
// console.log('h:  ', h);
// console.log('i:  ', i);
// console.log('j:  ', j);
// console.log('k:  ', k);
// console.log('l:  ', l);
// console.log('m:  ', m);
// console.log('n:  ', n);
// console.log('o:  ', o);
// console.log('p:  ', p);
// console.log('q:  ', q);
// console.log('r:  ', r);

const Projects = () => {
    // console.log('data: ', data);

    return (
        <>
            <Navigation />
            <div className="projects-container">
                {data.map((project) => (
                    <ProjectCard key={project.id} data={data} />
                ))}

                <ProjectCard />
            </div>
        </>
    );
};

export default Projects;
