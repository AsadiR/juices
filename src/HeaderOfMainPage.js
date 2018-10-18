import React, {Component} from 'react'
import HeroArea from "./HeroArea";
import NavBar from "./NavBar";

export default class HeaderOfMainPage extends Component {
    render() {
        return (
            <header>
                <HeroArea/>
                <NavBar/>
            </header>
        );
    }
}