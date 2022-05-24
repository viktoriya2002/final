import React from 'react';
import logo from '../components/image/logo.jpg';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success p-2 text-dark bg-opacity-25">
                <div className="container-fluid">
                    <Link to='/index'><img src={logo} alt="WhiteTickets" className="test-0-logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">&nbsp;</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/index'>&nbsp;Главная&nbsp;</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/autification'>&nbsp;Вход в кабинет&nbsp;</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/registration'>&nbsp;Регистрация&nbsp;</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/new'>&nbsp;Добавить объявление&nbsp;</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/search'>&nbsp;Поиск по объявлениям&nbsp;</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
                                <button className="btn btn-success" onClick="&nbsp;">Поиск</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;