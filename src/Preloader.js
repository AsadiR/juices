import React, {Component} from 'react'
import { FaCocktail } from 'react-icons/fa';

export default class Preloader extends Component {
    render() {
        return (
            <div id="preloader">
                <div id="status">
                    <FaCocktail style={{color: "orange"}} className="wow pulse infinite" data-wow-duration="8s"/>
                </div>
            </div>
        );
    }
}

