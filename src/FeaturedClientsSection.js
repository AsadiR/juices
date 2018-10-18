import React, {Component} from 'react'

export default class FeaturedClientsSection extends Component {
    render() {
        return (
            <div id="clients">
                <div className="container">
                    <div className="col-md-3">
                        <h4>Proudly worked with:</h4>
                    </div>
                    <div className="col-md-9">
                        <ul>
                            <li><img src={require("./img/payoneer.png")} alt="Payoneer"/></li>
                            <li><img src={require("./img/amazon.png")} alt="Amazon"/></li>
                            <li><img src={require("./img/elance-odesk.png")} alt="Elance-oDesk"/></li>
                            <li><img src={require("./img/curb.png")} alt="Curb Envy"/></li>
                        </ul>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}