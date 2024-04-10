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
import Login from './front-end/components/login';
import Dashboard from './front-end/components/dashboard';
import AuthWrapper from './front-end/components/authToken';

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
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AuthWrapper><Dashboard /></AuthWrapper> } />
      </Routes>
    </Router>
  </React.StrictMode>,
);
