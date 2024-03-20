import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './front-end/App';
import NavBar from './front-end/components/navbar';
import Home from './front-end/components/home';
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Home />
  </React.StrictMode>
);
