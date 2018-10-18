import React, {Component} from 'react'
import {
  CallToAction, Flex, Heading, Subhead, Hero, ScrollDownIndicator
} from 'react-landing-page'

import styled from 'styled-components';

const TextBlock = styled.div`
    border-radius: 50%;
    border: 2px solid #73AD21;
    padding: 20px; 
    width: 50%;
    margin: auto;
    background: #EEE8AA;
`;
const trainglify_bg = require("./img/trianglify-background.svg");

export default class HeroArea extends Component {
    render() {
        return (
            <Hero
                id="hero"
                color='mediumseagreen'
                backgroundImage={trainglify_bg} no-repeat
            >
                <Flex flexWrap='wrap' alignItems='center'>
                    <Flex alignItems='flex-start' width={[1, 1, 1, 5/6]} p={1} m="auto">
                        <img className="wow fadeInUp"
                             style={{marginLeft: "14%", width: "20%", borderRadius: "5%", maxHeight: "45%"}}
                             src={require("./img/juices/2.jpg")}
                             alt="Самый-Сок"/>
                        <img className="wow fadeInUp"
                             style={{marginLeft: "-2%", marginTop: "5%", width: "20%", borderRadius: "5%", maxHeight: "45%"}}
                             src={require("./img/juices/1.jpg")}
                             alt="Самый-Сок"/>
                        <img className="wow fadeInUp"
                             style={{marginLeft: "-2%", width: "20%", borderRadius: "5%", maxHeight: "45%"}}
                             src={require("./img/juices/3.jpg")}
                             alt="Самый-Сок"/>
                        <img className="wow fadeInUp"
                             style={{marginLeft: "-2%", marginTop: "5%", width: "20%", borderRadius: "5%", maxHeight: "45%"}}
                             src={require("./img/juices/4.jpg")}
                             alt="Самый-Сок"/>
                    </Flex>
                    <Flex width={[1, 1, 1, 1]} alignItems='center'
                          flexDirection='column' p={3} m={"auto"} mt={3}
                          className="wow fadeInDown"
                    >
                        <Heading fontSize={["2em", "3em"]} style={{textAlign: "center"}}>Хочешь быть бодрым и веселым?</Heading>
                        <Subhead fontSize={["1.5em", "2em"]} style={{textAlign: "center"}}>Свежевыжатый сок поможет тебе в этом!</Subhead>
                        <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                            <CallToAction fontSize={["1em", "2em"]} href="#services" bg="mediumseagreen" color="white">
                                Заказать сок
                            </CallToAction>
                        </Flex>
                    </Flex>
                </Flex>
                <ScrollDownIndicator style={{color: "darkgreen"}}/>
            </Hero>
        );
    }
}

