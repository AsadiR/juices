import React, {Component} from 'react';
import styled from 'styled-components';

const Name = styled.p`

`;
const Profession = styled.p`
    font-style: italic;
    color: gray;
`;
const Testimonial = styled.p`
    font-style: italic;
    line-height: 1em;
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
                            <Testimonial>
                                Вы просто космос!
                                Первый раз попробовала такой вариант с доставкой и сама не ожидала как сильно понравится.
                                Жду расширения и буду готовиться к первому дня детокса
                            </Testimonial>
                            <Name>Аня</Name>
                            <Profession>Журналист</Profession>
                        </div>
                    </div>

                    <div className="col-md-6 wow bounceIn" data-wow-duration="3s">
                        <div className="clientsphoto">
                            <img src={require("./img/clients/Dimon.jpg")} alt="Дима"/>
                        </div>

                        <div className="quote">
                            <Testimonial>
                                Доставка меня просто спасла, стал больше спать,
                                потому что теперь с утра не надо около часа проводить на кухне,
                                выжимая себе соков на работу. Так что запасайтесь фруктами,
                                скоро весь офис о вас узнает
                            </Testimonial>
                            <Name>Дима</Name>
                            <Profession>Юрист</Profession>
                        </div>
                    </div>

                    <div className="col-md-6 wow bounceIn" data-wow-duration="3s">
                        <div className="clientsphoto">
                            <img src={require("./img/clients/Nastya.jpg")} alt="Настя"/>
                        </div>

                        <div className="quote">
                            <Testimonial>
                                Была одной из первых, кто заказала самый сок, сильно этим горжусь!
                                Такие молдые и активные ребята,
                                действительно чувствуется желание заниматься соками и делать людям приятно.
                                Однозначно рекомендую!
                            </Testimonial>
                            <Name>Настя</Name>
                            <Profession>Предприниматель</Profession>
                        </div>
                    </div>

                    <div className="col-md-6 wow bounceIn" data-wow-duration="2s">
                        <div className="clientsphoto">
                            <img src={require("./img/clients/Ramil.jpg")} alt="Рамиль"/>
                        </div>

                        <div className="quote">
                            <Testimonial>
                                Знаете, мне понравилось! Иногда так хочется сока. Вы меня просто выручили!
                            </Testimonial>
                            <Name>Рамиль</Name>
                            <Profession>Дизайнер</Profession>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
