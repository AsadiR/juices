import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const FooterLink = styled.a`
    color: orange!important;
    margin-top: 4em  
`;


export default class FooterOfMainPage extends Component {
    render() {
        return (
            <footer id={"pagefooter"}>
                <div className="container">
                    <span className="bigicon icon-speedometer "/>

                    <div className="row footerlinks">
                        <div className="col-xs-12 col-md-3">
                            <FooterLink className="normal-text" href="#hero">В начало</FooterLink>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <FooterLink className="normal-text" href="#about">О нас</FooterLink>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <FooterLink className="normal-text" href="#services">Заказать сок</FooterLink>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <FooterLink className="normal-text" href="#testimonials">Отзывы</FooterLink>
                        </div>
                    </div>

                    <div className="copyright">
                        <p>
                            Заказы принимаются как по телефону 8 (916) 113-36-15,
                            так и через соц. сети.
                        </p>
                        <p>
                            Мы ценим наших клиентов и хотим стать лучше,
                            так что будем благодарны за обратную связь.
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