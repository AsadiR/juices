import React, {Component} from 'react';

export default class AboutSection extends Component {
    render() {
        return (
            <div id="about" className="container">
                <div className="row">
                    <div className="wow fadeInUp col-xs-12 col-lg-6" data-wow-duration="3s">
                        <h3> Компания Самый-Сок </h3>
                        <h4>
                            Доставляем свежевыжатый сок по указаному вами адресу, в удобное для вас время.
                        </h4>
                        <p>
                            Привет! Думаешь, что правильное питание и полезные привычки - это сложно и непонятно?
                            Да и вообще с таким графиком, как у тебя, не подойдёт? Готовы с этим поспорить!
                            Друг, лови двух зайцев сразу: правильное питание и свободное время для того,
                            что важно - "Самый-Сок" тебя поддержит.
                        </p>
                    </div>

                    <div className="wow fadeInDown col-xs-12 col-lg-6" data-wow-duration="3s">
                        <div style={{width: "80%", margin: "auto"}}>
                            <img src={require("./img/juices_test.jpg")} alt="Самый-Сок"
                                style={{borderRadius: "50%", width: "100%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
