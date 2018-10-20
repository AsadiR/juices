import React, {Component} from 'react';
import HeaderOfMainPage from './HeaderOfMainPage';
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";
import FooterOfMainPage from "./FooterOfMainPage";

import WOW from 'wowjs';
import Preloader from "./Preloader";


export default class MainPage extends Component {
    componentDidMount() {
        require('./js/lib');
        new WOW.WOW({live: false}).init();
    }

    render() {
        return (
            <div data-spy="scroll">
                <Preloader/>
                <HeaderOfMainPage/>
                <AboutSection/>
                <hr/>
                <ServiceSection/>
                <TestimonialSection/>
                <FooterOfMainPage/>
            </div>
        );
    }
}
