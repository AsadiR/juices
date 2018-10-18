import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';

export default class FooterOfMainPage extends Component {
    render() {
        return (
            <footer id={"pagefooter"}>
                <div className="container">
                    <span className="bigicon icon-speedometer "/>

                    <div className="footerlinks">
                        <ul>
                            <li>
                                <a href="#hero">В начало</a>
                            </li>
                            <li>
                                <a href="#about">О нас</a>
                            </li>
                            <li>
                                <a href="#services">Заказать сок</a>
                            </li>
                            <li>
                                <a href="#testimonials">Отзывы</a>
                            </li>
                        </ul>
                    </div>

                    <div className="copyright">
                        <p>
                            Мы принимаем заказы, как по телефону 8 (916) 113-36-15,
                            так и через соц. сети.
                        </p>
                        <p>
                            Мы ценим наших клиентов, и хотим стать лучше.
                            Если у вас есть какие-то вопросы или пожелания,
                            то пишите нам. Спасибо, что вы с нами!
                        </p>
                    </div>

                    <div className="footersocial wow fadeInUp" data-wow-duration="3s">
                        <ul>
                            <li>
                                <SocialIcon url="https://vk.com/ok_samiy_sok" />
                            </li>
                            <li>
                                <SocialIcon url="https://www.instagram.com/ok_samiy_sok/" />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}