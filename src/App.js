import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.component';

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route
                    path="/pages/projects"
                    element={<Projects />}
                />
            </Routes>
        </>
    );
}

export default App;
