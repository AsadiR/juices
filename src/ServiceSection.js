import React, {Component} from 'react';
import { FaCocktail } from 'react-icons/fa';
import { Card } from 'rebass';
import styled from 'styled-components'

const DivWithMargin = styled.div`
    margin-top: 2em;
`;

export default class ServiceSection extends Component {
    render() {
        return (

            <div id="services" className="container">
                <div className="sectionhead  row wow fadeInUp">
                    <FaCocktail style={{color: "gray"}} className="bigicon"/>
                    <p>Вот какие соки и смузи у нас есть</p>
                    <hr className="separetor"/>
                </div>

                <div className="row">
                    <DivWithMargin className="col-md-12 col-lg-4 wow fadeInUp mt-4" data-wow-duration="3s">
                        <img src={require("./img/fruits/Яблоко.png")} alt=""/>
                        <img src={require("./img/fruits/Морковь.png")} alt=""/>
                        <img src={require("./img/fruits/Ананас.png")} alt=""/>
                        <p>Яблоко + Морковь + Ананас</p>
                    </DivWithMargin>

                    <DivWithMargin className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="3s">
                        <img src={require("./img/fruits/Киви.png")} alt=""/>
                        <img src={require("./img/fruits/Лимон.png")} alt=""/>
                        <img src={require("./img/fruits/Яблоко.png")} alt=""/>
                        <img src={require("./img/fruits/Шпинат.png")} alt=""/>
                        <p>Киви + Лимон + Яблоко + Шпинат</p>
                    </DivWithMargin>

                    <DivWithMargin className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="3s">
                        <img src={require("./img/fruits/Лимон.png")} alt=""/>
                        <img src={require("./img/fruits/Апельсин.png")} alt=""/>
                        <img src={require("./img/fruits/Яблоко.png")} alt=""/>
                        <img src={require("./img/fruits/Имбирь.png")} alt=""/>
                        <p>Лимон + Апельсин + Яблоко + Имбирь</p>
                    </DivWithMargin>
                </div>
                <div className="row">
                    <DivWithMargin className="col-md-12 col-lg-4 mt-4 wow fadeInUp" data-wow-duration="3s">
                        <img src={require("./img/fruits/Апельсин.png")} alt=""/>
                        <img src={require("./img/fruits/Морковь.png")} alt=""/>
                        <img src={require("./img/fruits/Яблоко.png")} alt=""/>
                        <p>Апельсин + Морковь + Яблоко</p>
                    </DivWithMargin>

                    <DivWithMargin className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="3s">
                        <img src={require("./img/fruits/Груша.png")} alt=""/>
                        <img src={require("./img/fruits/Апельсин.png")} alt=""/>
                        <img src={require("./img/fruits/Банан.png")} alt=""/>
                        <p>Груша + Апельсин + Банан</p>
                    </DivWithMargin>

                    <DivWithMargin className="col-md-12 col-lg-4 wow fadeInUp" data-wow-duration="3s">
                        <img src={require("./img/fruits/Вопрос.png")} alt=""/>
                        <p>Сок из одного фрукта на 100%</p>
                    </DivWithMargin>
                </div>
                <div className="row panel panel-default" style={{marginTop: "5%"}}>
                    <Card className="panel-body wow fadeInUp" data-wow-duration="3s">
                        <p>Одна бутылочка объемом 300 мл стоит 250 рублей.</p>
                        <p>При заказе 6 и более скидка 25% (200 рублей за штуку).</p>
                        <p>При заказе от 2000 доставка бесплатно. </p>
                        <br/>
                        <p>
                            Мы принимаем заказы, как по телефону 8 (916) 113-36-15, так и через <a href="#pagefooter">соц. сети.</a>
                        </p>
                    </Card>
                </div>
            </div>
        )
    }
}
