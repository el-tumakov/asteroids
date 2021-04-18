import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./header.scss";

interface LocationState {
  pathname: string;
}

const Header: React.FC = () => {
  const location = useLocation<LocationState>();

  return (
    <header className="header wrapper">
      <div className="header__wrap">
        <Link className="header__logo" to="/">
          <picture>
            <source media="(min-width: 768px)" srcSet="img/logo-desktop.svg" />
            <img
              className="header__image"
              src="img/logo-mobile.svg"
              width="199"
              height="19"
              alt="Название сайта - Armaggedon V"
            />
          </picture>
        </Link>
        <p className="header__description">
          Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
          Земле.
        </p>
        <nav className="header__navigation">
          <ul className="header__list">
            <li className="header__item">
              <Link
                className={`header__link ${
                  location.pathname === "/" && "header__link--active"
                }`}
                to="/"
              >
                Астероиды
              </Link>
            </li>
            <li className="header__item">
              <Link
                className={`header__link ${
                  location.pathname === "/destroy" && "header__link--active"
                }`}
                to="/destroy"
              >
                Уничтожение
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
