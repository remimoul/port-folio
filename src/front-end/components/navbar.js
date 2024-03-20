import style from '../assets/styles/navbar/header.module.css'

function NavBar(){


    return (
<header className={style.header}>
  
        <div className={style.headerContainer}>
          <div className={style.logoContainer}>
           
          </div>
          <div className={style.center}>
            <ul>
              <li>Mes projets</li>
              <li>Expérience</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>
 
    </header>

);
}

export default NavBar;
