import React, {Component} from 'react';

export default class PortfolioSection extends Component {
    render() {
        return (
            <div id="portfolio">
                <div className="sectionhead wow bounceInUp" data-wow-duration="2s">
                    <span className="bigicon icon-rocket"/>
                    <h3>A few recent works</h3>
                    <hr className="separetor"/>
                </div>

                <div className="portfolioitems container">
                    <ul>
                        <div id="shotsByPlayerId"/>
                    </ul>
                </div>

                <a className="btn btn-default wow fadeInUp" href="http://dribbble.com/srizon" role="button">
                    <span className="btnicon icon-social-dribbble"/>
                    <span className="button_text">View all items</span>
                </a>
            </div>
        );
    }
}