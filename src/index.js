import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './front-end/App';
import NavBar from './front-end/components/navbar';
import Home from './front-end/components/home';
import Projects from './front-end/components/project';
import './global.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './front-end/components/whoiam';
import Experience from './front-end/components/experience';
import Contact from './front-end/components/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
