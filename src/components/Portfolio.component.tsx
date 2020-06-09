import React, {Component} from 'react';
import "./Portfolio.component.css";

let M = require("materialize-css");

class Portfolio extends Component{
    render(){
        return(

            <div className="" id="portfolioWrapper">

                {/* Heading */}
                <div className="row">
                   <div className="col s12 center-align">
                       <h3 className="col offset-l5 red-text darken-3 ">
                           <span className="heading">Portfolio.</span>
                        </h3>
                   </div> 
                </div>

                <div className="container">
                    <div className="row">
                        {/* Iterate */}
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/taftapro/landingPage2.png" className="materialboxed"/>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p>
                                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/taftapro/landingPage2.png" className="materialboxed"/>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p>
                                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/taftapro/landingPage2.png" className="materialboxed"/>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p>
                                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/taftapro/landingPage2.png" className="materialboxed"/>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p>
                                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/taftapro/landingPage2.png" className="materialboxed"/>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p>
                                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/taftapro/landingPage2.png" className="materialboxed"/>
                                    <a className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p>
                                        I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>       
        )
    }

    componentDidMount(){
        let elems = document.querySelectorAll('.carousel');
        let instance = M.Carousel.init(elems, {
            fullWidth: true,
            indicator: true
        });
        let elemsBoxes = document.querySelectorAll('.materialboxed');
        let elemsToolTip = document.querySelectorAll('.tooltipped');
        let instancesBoxes = M.Materialbox.init(elemsBoxes,{});
        let toolTipInstance = M.Tooltip.init(elemsToolTip, {});
    }
}

export default Portfolio;


{/* <div className="col s12 m8 offset-m2 center-align">

<div className="card medium blue-grey darken-1">
    <div className="card-image">
        <a className="carousel-item info" href="#one!">
            <img src="/images/taftapro/landingPage2.png"/>
        </a>
    </div>

    <div className="card-content">
        <p className="white-text left-align">
            I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.
        </p>
    </div>
</div>
</div> */}
