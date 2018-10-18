import React, {Component} from 'react';
import styled from 'styled-components';

const styledP = styled.p`
    color: black
`;

export default class TestimonialSection extends Component {
    render() {
        return (
            <div id="testimonials" className="container">
                <div className="sectionhead wow bounceInUp" data-wow-duration="2s">
                    <span className="bigicon icon-bubbles"/>
                    <p>
                        Отзывы:
                    </p>
                    <hr className="separetor"/>
                </div>

                <div className="row">
                    <div className="col-md-6 wow bounceIn" data-wow-duration="2s">
                        <div className="clientsphoto">
                            <img src={require("./img/clients/Anya.jpg")} alt="Аня"/>
                        </div>

                        <div className="quote">
                            <blockquote>
                                <styledP>
                                    Вы просто космос!
                                    Первый раз попробовала такой вариант с доставкой и сама не ожидала как сильно понравится.
                                    Жду расширения и буду готовиться к первому дня детокса
                                </styledP>
                            </blockquote>
                            <p>Аня</p>
                            <styledP>Журналист</styledP>
                        </div>
                    </div>

                    <div className="col-md-6 wow bounceIn" data-wow-duration="3s">
                        <div className="clientsphoto">
                            <img src={require("./img/clients/Dimon.jpg")} alt="Дима"/>
                        </div>

                        <div className="quote">
                            <blockquote>
                                <styledP>
                                    Доставка меня просто спасла, стал больше спать,
                                    потому что теперь с утра не надо около часа проводить на кухне,
                                    выжимая себе соков на работу. Так что запасайтесь фруктами,
                                    скоро весь офис о вас узнает
                                </styledP>
                            </blockquote>
                            <p>Дима</p>
                            <styledP>Юрист</styledP>
                        </div>
                    </div>

                    <div className="col-md-6 wow bounceIn" data-wow-duration="3s">
                        <div className="clientsphoto">
                            <img src={require("./img/clients/Nastya.jpg")} alt="Настя"/>
                        </div>

                        <div className="quote">
                            <blockquote>
                                <styledP>
                                    Вы просто космос!
                                    Первый раз попробовала такой вариант с доставкой и сама не ожидала как сильно понравится.
                                    Жду расширения и буду готовиться к первому дня детокса
                                </styledP>
                            </blockquote>
                            <p>Настя</p>
                            <styledP>Предприниматель</styledP>
                        </div>
                    </div>

                    <div className="col-md-6 wow bounceIn" data-wow-duration="2s">
                        <div className="clientsphoto">
                            <img src={require("./img/clients/Ramil.jpg")} alt="Рамиль"/>
                        </div>

                        <div className="quote">
                            <blockquote>
                                <styledP>
                                    Знаете, мне понравилось! Иногда так хочется сока. Вы меня просто выручили!
                                </styledP>
                            </blockquote>
                            <p>Рамиль</p>
                            <styledP>Дизайнер</styledP>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
