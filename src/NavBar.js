import React, {Component} from 'react'
import { FaCocktail } from 'react-icons/fa';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>

                        <a className="navbar-brand" href="#hero">
                            <span className="brandicon icon-grid"/>
                            <span className="brandname">Самый-Сок</span>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#about">
                                    <span className="btnicon icon-user"/>О нас
                                </a>
                            </li>
                            <li>
                                <a href="#services">
                                    <FaCocktail style={{color: "gray"}} className="btnicon"/>Заказать сок
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials">
                                    <span className="btnicon icon-bubble"/>Отзывы
                                </a>
                            </li>

                            <li>
                                <a href="#pagefooter">
                                    <span className="btnicon icon-envelope-open"/>Контакты
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}
