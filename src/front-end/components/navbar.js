import style from '../assets/styles/navbar/header.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.logoContainer}></div>
        <div className={style.center}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Qui suis-je ?</Link>
            </li>
            <li>
              <Link to="/projects">Mes projets</Link>
            </li>
            <li>
              <Link to="/experience">Expériences</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
