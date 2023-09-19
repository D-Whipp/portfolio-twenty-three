import './about.styles.css';

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-container">
            
            <div className="about-text">
                <p>
                    <span className="text-headline">
                        Hello! My name is David.{' '}
                    </span>
                    I earned a Full Stack Web Development certificate
                    from the University of Arizona's Coding Bootcamp
                    and I earned an Associate's Degree in Applied
                    Science from Central New Mexico Community College.
                </p>
                <p><span className='text-headline'>I have experience with the following:</span></p>
                <p>
                    <span className="text-headline">Front-End: </span>
                    HTML5, CSS3, JavaScript, Bootstrap, JQuery, and
                    React.
                </p>
                <p>
                    <span className="text-headline">Back-End: </span>
                    JSON, Express.js, Node.js, MySQL, and MongoDB.
                </p>
                <p>
                    <span className="text-headline">
                        Web Development Paradigms:{' '}
                    </span>
                    Responsive Designs, RESTful API's Database Theory,
                    and Agile Methodoliges.
                </p>
                <p>
                    <span className="text-headline">
                        Related Technologies:{' '}
                    </span>
                    Git, Github, Command Line, Heroku, Netlify, Google
                    Firebase, Imagekit.io, CDN's, and Stripe.
                </p>
            </div>
            <Link to="https://github.com/D-Whipp" target="_blank">
                <div className="avatar-image"></div>
                <div className='certificate-image'></div>
            </Link>
        </div>
    );
};

export default About;
