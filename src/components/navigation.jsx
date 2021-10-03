import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faFilm, faTh, faClipboardList, faTable } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({currentPage, onSetPage}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const setPage = (i) => {
    onSetPage(i);
    setMenuOpen(false);
  }

  return (
    <header className="navigation">
      <nav className="custom-navbar">
        <ul className={"nav-list" + (menuOpen ? " responsive" : "")}>
          <li className={(currentPage === 0 ? "active " : "") + "nav-item-brand"} onClick={() => setPage(0)}>
            <a href="#Home" className="nav-brand-name">
              <img src="https://github.com/Crazyloon/d2cheatsheet/blob/main/public/Images/Logo.jpg?raw=true" alt="Diablo 2 Resurrected Logo" />
            </a>
          </li>
          <li className={(currentPage === 0 ? "active " : "") + "nav-item"} onClick={() => setPage(0)}>
            <FontAwesomeIcon icon={faHome} size={'1x'} />
            <a href="#Home" className="nav-link nav-brand-name">Home</a>
          </li>
          <li className={(currentPage === 1 ? "active " : "") + "nav-item"} onClick={() => setPage(1)}>
            <FontAwesomeIcon icon={faTable} size={'1x'} />
            <a href="#ItemBases" className="nav-link">Runeword Bases</a>
          </li>
          <li className={(currentPage === 2 ? "active " : "") + "nav-item"} onClick={() => setPage(2)}>
            <FontAwesomeIcon icon={faTh} size={'1x'} />
            <a href="#CubeRecipes" className="nav-link">Cube Recipes</a>
          </li>
          <li className={(currentPage === 3 ? "active " : "") + "nav-item"} onClick={() => setPage(3)}>
            <FontAwesomeIcon icon={faClipboardList} size={'1x'} />
            <a href="#Todo" className="nav-link">Todo</a>
          </li>
          <li className={"nav-item nav-toggle icon"} onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={faBars} size={'1x'} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;