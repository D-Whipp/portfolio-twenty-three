import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/navbar/navigation.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
