import React from "react";
import { Title, Link, Meta } from 'react-head';

const favicon = require("./img/logo/favicon.ico");

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
                <Link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Antic|Raleway:300" type="text/css"/>
            </div>
        );
    }
}