import React, {Component} from 'react'
import { FaCocktail } from 'react-icons/fa';

export default class Preloader extends Component {
    render() {
        return (
            <div id="preloader">
                <div id="status">
                    <p style={{color: "orange"}} className="wow pulse infinite" dataWowDuration="8s">
                        Loading
                    </p>
                </div>
            </div>
        );
    }
}

