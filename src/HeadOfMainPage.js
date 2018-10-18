import React from "react";
import { Title, Link, Meta } from 'react-head';

const favicon = require("./img/logo/favicon.ico");

const preloader_css = require("./css/preloader.css");
const style_css = require("./css/style.css");
const responsive_css = require("./css/responsive.css");
const animate_css = require("./css/animate.css");
const simple_line_icons_css = require("./css/simple-line-icons.css");

export default class OrderItems extends React.Component {
    render() {
        return (
            <div id={"head"}>
                <Meta charSet="utf-8"/>
                <Meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <Meta name="viewport" content="width=device-width, initial-scale=1"/>


                <Meta name="description"
                      content="Text of description"/>
                <Meta name="keywords"
                          content="keywords separated by comma"/>
                <Meta name="AsadiR" content="inmeal team"/>
                <Title>Самый сок</Title>


                <Link rel="icon shortcut" href={favicon}/>

                <Link rel="stylesheet" href={preloader_css}/>
                <Link rel="stylesheet" href={style_css}/>
                <Link rel="stylesheet" href={responsive_css}/>
                <Link rel="stylesheet" href={animate_css}/>

                <Link rel="stylesheet" href={simple_line_icons_css}/>
                <Link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Antic|Raleway:300"/>
            </div>
        );
    }
}