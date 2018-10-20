import React, {Component} from 'react'
import {
  CallToAction, ScrollDownIndicator
} from 'react-landing-page'

import styled from 'styled-components';

const trainglify_bg = require("./img/trianglify-background.svg");
const StyledHero = styled.div`
    background: url(${trainglify_bg}) no-repeat;
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(
        src=${trainglify_bg},
        sizingMethod='scale');
    color: mediumseagreen;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    
    width: 100%;
    padding: 0;
    margin: 0;
`;

const RoundedImg = styled.img`
    border-radius: 5%;
    width: 100%;
    height: auto;
`;


export default class HeroArea extends Component {
    render() {
        return (
            <StyledHero id="hero" className="container">
                <div className="row image-row">
                    <div className="col-xs-6 col-md-3 img1-offset">
                        <RoundedImg className="wow fadeInUp"
                             src={require("./img/juices/2.jpg")}
                             alt="Самый-Сок"/>
                    </div>
                    <div className="col-xs-6 col-md-3 img2-offset">
                        <RoundedImg className="wow fadeInUp"
                             src={require("./img/juices/1.jpg")}
                             alt="Самый-Сок"/>
                    </div>
                    <div className="col-xs-6 col-md-3 img3-offset">
                        <RoundedImg className="wow fadeInUp"
                             src={require("./img/juices/3.jpg")}
                             alt="Самый-Сок"/>
                    </div>
                    <div className="col-xs-6 col-md-3 img4-offset">
                        <RoundedImg className="wow fadeInUp"
                             src={require("./img/juices/4.jpg")}
                             alt="Самый-Сок"/>
                    </div>
                </div>

                <div className="row action-row" style={{width: "100%"}}>
                    <div className="col-xs-12 wow fadeInDown">
                        <h3 className="stroke" style={{textAlign: "center", marginTop: ".5em"}}>
                            Хочешь быть бодрым и веселым?
                        </h3>
                        <h4 className="stroke" style={{textAlign: "center"}}>
                            Свежевыжатый сок поможет тебе в этом!
                        </h4>
                        <div style={{textAlign: "center", marginTop: "1em", marginBottom: "5em"}}>
                            <CallToAction className="stroke" fontSize={["1em", "2em", "3em", "3em"]} href="#services"
                                          bg="mediumseagreen" color="white">
                                Заказать сок
                            </CallToAction>
                        </div>
                    </div>
                </div>
                <ScrollDownIndicator style={{color: "darkgreen", position: "relative"}}/>
            </StyledHero>
        );
    }
}


