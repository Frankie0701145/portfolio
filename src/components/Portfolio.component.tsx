import React, {Component} from 'react';
import "./Portfolio.component.css";
import { faHome, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faNodeJs, faReact, faPaypal,faDigitalOcean, faStripe } from '@fortawesome/free-brands-svg-icons'

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

                        
                        {/* ACAL */}
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/acal/acal.png" className="materialboxed"/>
                                    <a href="https://talent.arijnawcal.com/" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" target="_blank" data-position="bottom" data-tooltip="View Site.">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Arijnaw Consulting Agency LLC</span>
                                    <p className="left-align">
                                      A web and mobile application and confirms to arijnawcal Consulate
                                    </p>
                                </div>
                                <div className="card-action">
                                    <div className="row align-center">
                                       <span className="col s2">
                                           <a className="tooltipped" data-position="bottom" data-tooltip="Used NodeJs.">
                                             <FontAwesomeIcon icon={faNodeJs} color="green"  className="tecIcons"/>
                                           </a>
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Used ReactJs.">
                                                <FontAwesomeIcon icon={faReact} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Integrated with PayPal">
                                                <FontAwesomeIcon icon={faStripe} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Deployed to Digital Ocean.">
                                                <FontAwesomeIcon icon={faDigitalOcean} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                    </div>        
                                </div>
                            </div>
                        </div>

                        {/* Vitumob */}
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/vitumob/vitumob.png" className="materialboxed"/>
                                    <a href="https://ship.vitumob.com/" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" target="_blank" data-position="bottom" data-tooltip="View Site.">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Vitumob</span>
                                    <p className="left-align">
                                      A web-based supply chain application based on Vitumob Company Limited current logistics.
                                      TThe web application has Mpesa payment, Paypal payment, invoicing, state machine to handle the 
                                      different states of the shipping items, demurrage, and real-time currency conversion. The application 
                                      is both based on <a href="https://play.google.com/store/apps/details?id=com.touchinspiration.vitumob&hl=en" target="_blank">mobile</a> and web application.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <div className="row align-center">
                                       <span className="col s2">
                                           <a className="tooltipped" data-position="bottom" data-tooltip="Used NodeJs.">
                                             <FontAwesomeIcon icon={faNodeJs} color="green"  className="tecIcons"/>
                                           </a>
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Used ReactJs.">
                                                <FontAwesomeIcon icon={faReact} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Integrated with PayPal">
                                                <FontAwesomeIcon icon={faPaypal} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Deployed to Digital Ocean.">
                                                <FontAwesomeIcon icon={faDigitalOcean} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        
                        {/* Gappmind */}
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/gappmind/gappmind.png" className="materialboxed"/>
                                    <a href="https://play.google.com/store/apps/details?id=com.touchinspiration.gappmind&hl=en" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" target="_blank" data-position="bottom" data-tooltip="View Site.">
                                        <i className="material-icons">phone_iphone</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Gappmind</span>
                                    <p className="left-align">
                                        A mobile app that enables teens to connect with counsellors for real time face-to-face support.
                                        The mobile application has the following features:  video calling, live chatting, assignment uploads and 
                                        counsellor scheduling.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <div className="row align-center">
                                       <span className="col s2">
                                           <a className="tooltipped" data-position="bottom" data-tooltip="Used NodeJs.">
                                             <FontAwesomeIcon icon={faNodeJs} color="green"  className="tecIcons"/>
                                           </a>
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Used ReactJs.">
                                                <FontAwesomeIcon icon={faReact} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Deployed to Digital Ocean.">
                                                <FontAwesomeIcon icon={faDigitalOcean} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                    </div>        
                                </div>
                            </div>
                        </div>

                        {/* Taftapro */}
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="/images/taftapro/landingPage2.png" className="materialboxed"/>
                                    <a href="" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <span className="card-title">Service Platform</span>
                                    <p className="left-align">
                                        I developed a web application platform whose primary aim is to connect customers, seeking services, with highly qualified 
                                        service providers available within their local area for NataftaPro.The web application boosted technology like smart location
                                        search, payment via Mpesa and PesaPal, emailing service, and Digital Ocean S3 bucket storage.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <div className="row align-center">
                                       <span className="col s2">
                                           <a className="tooltipped" data-position="bottom" data-tooltip="Used Angular.">
                                             <FontAwesomeIcon icon={faAngular}  className="tecIcons" color="black"/>
                                           </a>
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Used Rails.">
                                                <img src="/images/iconfinder_ruby-on-rails_3069735.svg" alt="" className="externalIcons"/>
                                            </a>         
                                        </span>
                                        <span className="col s2">
                                            <a className="tooltipped" data-position="bottom" data-tooltip="Deployed to Digital Ocean.">
                                                <FontAwesomeIcon icon={faDigitalOcean} color="blue"  className="tecIcons"/>
                                            </a>                
                                        </span>
                                    </div>        
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

