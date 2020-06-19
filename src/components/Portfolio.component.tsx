import React, {Component} from 'react';
import "./Portfolio.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faNodeJs, faReact, faPaypal,faDigitalOcean, faStripe } from '@fortawesome/free-brands-svg-icons';
import landingPage2 from "../images/taftapro/landingPage2.png";
import acal from "../images/acal/acal.png";
import vitumob from "../images/vitumob/vitumob.png";
import gappmind from "../images/gappmind/gappmind.png";
import railsIcon from "../images/iconfinder_ruby-on-rails_3069735.svg";

let M = require("materialize-css");

class Portfolio extends Component{
    angularHomePage = "https://angular.io/";
    railsHomePage = "https://rubyonrails.org/";
    stripeHomePage = "https://stripe.com/";
    nodeHomePage = "https://nodejs.org/en/";
    reactHomePage = "https://reactjs.org/";
    paypalHomePage= "https://www.paypal.com/";
    digitalOceanHomePage = "https://www.digitalocean.com/";
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
                        
                        {/* Taftapro */}
                        <div className="col s12 m12">
                            <h6 className="title">Service Platform</h6>
                            <div className="card">
                                <div className="card-image" id="cardImg">
                                    <img  alt="" src={landingPage2} className="materialboxed" />
                                    <a href="#taftapro" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    
                                    <p className="left-align">
                                        I developed a web application platform whose primary aim is to connect customers seeking services, with highly qualified 
                                        service providers available within their local area for NataftaPro.The web application boosted technology like smart location
                                        search, payment via Mpesa and PesaPal, emailing service, and Digital Ocean S3 bucket storage.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <div className="row">
                                       <span className="col s2">
                                           <a href={this.angularHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Used Angular.">
                                             <FontAwesomeIcon icon={faAngular}  className="tecIcons" color="black"/>
                                           </a>
                                        </span>
                                        <span className="col s2">
                                            <a href={this.railsHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Used Rails.">
                                                <img alt="" src={railsIcon} className="externalIcons"/>
                                            </a>         
                                        </span>
                                        <span className="col s2">
                                            <a href={this.digitalOceanHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Deployed to Digital Ocean.">
                                                <FontAwesomeIcon icon={faDigitalOcean} color="blue"  className="tecIcons"/>
                                            </a>                
                                        </span>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        
                        {/* ACAL */}
                        <div className="col s12 m12">
                            <h6 className="title">Arijnaw Consulting Agency LLC</h6>
                            <div className="card">
                                <div className="card-image" id="cardImgWrapper">
                                    <img alt="" src={acal} className="materialboxed"/>
                                    <a href="https://talent.arijnawcal.com/" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" target="_blank" rel="noopener noreferrer" data-position="bottom" data-tooltip="View Site.">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <p className="left-align">
                                      Is a Integrated Business Administration Platform that conforms to the Arijnaw Consulting Agency LLC business.  Arijnaw Consulting Agency LLC is is a brokerage firm 
                                      focused on connecting TALENT (INVENTORS) with CLIENTS (INVESTORS). The platform is mobile based, boost of technologies like subscription, card payments, and
                                      video and pdf upload. I featured on the development team and my main work was developing the backend. I also helped develop the front-end.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <div className="row">
                                       <span className="col s2">
                                           <a href={this.nodeHomePage} className="tooltipped" data-position="bottom" data-tooltip="Used NodeJs.">
                                             <FontAwesomeIcon icon={faNodeJs} color="green"  className="tecIcons"/>
                                           </a>
                                        </span>
                                        <span className="col s2">
                                            <a href={this.reactHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Used ReactJs.">
                                                <FontAwesomeIcon icon={faReact} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a href={this.stripeHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Integrated with PayPal">
                                                <FontAwesomeIcon icon={faStripe} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a href={this.digitalOceanHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Deployed to Digital Ocean.">
                                                <FontAwesomeIcon icon={faDigitalOcean} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                    </div>        
                                </div>
                            </div>
                        </div>

                        {/* Vitumob */}
                        <div className="col s12 m12">
                            <h6 className="title">Vitumob</h6>
                            <div className="card">
                                <div className="card-image" id="cardImg">
                                    <img alt="" src={vitumob} className="materialboxed" height="300"/>
                                    <a href="https://ship.vitumob.com/" rel="noopener noreferrer" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" target="_blank" data-position="bottom" data-tooltip="View Site.">
                                        <i className="material-icons">web</i>
                                    </a>
                                </div>
                                <div className="card-content">
                                    <p className="left-align">
                                      A web-based supply chain application based on Vitumob Company Limited current logistics.
                                      The web application has Mpesa payment, Paypal payment, invoicing, state machine to handle the 
                                      different states of the shipping items, demurrage, and real-time currency conversion. The application 
                                      is both based on <a href="https://play.google.com/store/apps/details?id=com.touchinspiration.vitumob&hl=en" target="_blank" rel="noopener noreferrer" >mobile</a> and web application.
                                      I featured on the development team and my main work was developing the backend. I also helped develop the front-end.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <div className="row">
                                       <span className="col s2">
                                           <a href={this.nodeHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Used NodeJs.">
                                             <FontAwesomeIcon icon={faNodeJs} color="green"  className="tecIcons"/>
                                           </a>
                                        </span>
                                        <span className="col s2">
                                            <a href={this.reactHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Used ReactJs.">
                                                <FontAwesomeIcon icon={faReact} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a href={this.paypalHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Integrated with PayPal">
                                                <FontAwesomeIcon icon={faPaypal} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                        <span className="col s2">
                                            <a href={this.digitalOceanHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Deployed to Digital Ocean.">
                                                <FontAwesomeIcon icon={faDigitalOcean} color="blue" className="tecIcons"/>  
                                            </a>                
                                        </span>
                                    </div>        
                                </div>
                            </div>
                        </div>

                        {/* Gappmind*/}
                        <div className="col s12 m12">
                            <h6 className="title">Gappmind</h6>
                            <div className="card horizontal cardHorizontal">
                                <div className="card-image cardImgHorizontal">
                                    <img alt="" src={gappmind } className="materialboxed"/>
                                    <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.touchinspiration.gappmind&hl=en" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="bottom" data-tooltip="View Site.">
                                        <i className="material-icons">phone_iphone</i>
                                    </a>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content valign-wrapper  ">
                                        <p className="left-align">
                                            A mobile app that enables teens to connect with counsellors for real time face-to-face support.
                                            The mobile application has the following features:  video calling, live chatting, assignment uploads and 
                                            counsellor scheduling. I featured on the development team and my main work was developing the backend. I also helped with developing the mobile application.
                                        </p>
                                    </div>
                                    <div className="card-action">
                                        <div className="row">
                                            <span className="col s3 m2">
                                                <a href={this.nodeHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Used NodeJs.">
                                                    <FontAwesomeIcon icon={faNodeJs} color="green"  className="tecIcons"/>
                                                </a>
                                            </span>
                                            <span className="col s3 m2">
                                                <a href={this.reactHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Used ReactJs.">
                                                    <FontAwesomeIcon icon={faReact} color="blue" className="tecIcons"/>  
                                                </a>                
                                            </span>
                                            <span className="col s3 m2">
                                                <a href={this.digitalOceanHomePage} target="_blank" rel="noopener noreferrer" className="tooltipped" data-position="bottom" data-tooltip="Deployed to Digital Ocean.">
                                                    <FontAwesomeIcon icon={faDigitalOcean} color="blue" className="tecIcons"/>  
                                                </a>                
                                            </span>
                                        </div>   
                                    </div>
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
        M.Carousel.init(elems, {
            fullWidth: true,
            indicator: true
        });
        let elemsBoxes = document.querySelectorAll('.materialboxed');
        let elemsToolTip = document.querySelectorAll('.tooltipped');
        M.Materialbox.init(elemsBoxes,{ });
        M.Tooltip.init(elemsToolTip, {});
    }
}

export default Portfolio;

