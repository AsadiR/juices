import React, {Component} from 'react';

import {
  Flex, Box, Section
} from 'react-landing-page'

export default class AboutSection extends Component {
    render() {
        return (
            <div id="about">
                <Flex flexWrap='wrap' alignItems='center'>
                    <Flex alignItems='flex-start' className="wow fadeInUp" width={[1, 1, 1, 1/2]} data-wow-duration="3s">
                        <Section
                            ml={"5%"}
                            className="wow fadeInUp"
                            heading="Мы - компания Самый-Сок"
                            subhead="Мы доставим свежевыжатый сок по указаному вами адресу, в удобное для вас время."
                        >
                            <p>
                                Привет! Думаешь, что правильное питание и полезные привычки - это сложно и непонятно?
                                Да и вообще с таким графиком, как у тебя, не подойдёт? Мы готовы с этим поспорить!
                                Друг, лови двух зайцев сразу: правильное питание и свободное время для того,
                                что важно - "Самый-Сок" тебя поддержит.
                            </p>
                        </Section>
                    </Flex>

                    <Flex flexDirection='column' className="wow fadeInDown" width={[1, 1, 1, 1/2]} data-wow-duration="3s">
                        <img src={require("./img/juices_test.jpg")} alt="Самый-Сок"
                            style={{borderRadius: "50%", width: "50%", height: "auto", margin: "auto"}}/>
                    </Flex>
                </Flex>
            </div>
        );
    }
}
