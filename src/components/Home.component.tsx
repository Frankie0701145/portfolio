import React, {Component} from "react";
import "./Home.component.css";
import "../../node_modules/materialize-social/materialize-social.css";


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class Home extends Component {

    render(){
        return (
            <div id="homeWrapper"  className="row">

                {/* Side Nav */}
                <div className="col s12 m12 l2 red darken-3" id="sideNav">

                    {/* Profile */}
                    <div className="section center-align">
                        <img src="images/profile.jpg" id="profilePic"  className="circle responsive-img"></img>
                        <h5 id="name">Francis Njuguna</h5>
                        <blockquote className="left-align">
                            Hi, my name is Francis Njuguna and I'm a full stack Software Developer. Welcome to my website!
                        </blockquote>
                    </div>
                    
                    <div className="section">
                        <div className="divider black"></div>
                        <div className="row">
                             <a href="#" className="col s12"> 
                                <div className="col s12 navLinks">Portfolio</div>
                            </a>
                        </div>

                        <div className="row active">
                            <a href="#" className="col s12">
                                <div className="col s12 navLinks">Skills </div>
                            </a>
                        </div>
                        <div className="row">
                            <a href="#" className="col s12">
                                <div className="col s12 navLinks "> About Me</div>
                            </a>                 
                        </div>
                    </div>

                    
                    <div className="section">
                       <div className="divider black"></div>
                       <div className="row">
                            <div className="col ">
                                <i className="material-icons icons col center-align">alarm</i>
                                <i className="material-icons icons col center-align">attach_file</i>
                                <i className="material-icons icons col center-align">backup</i>
                            </div>
                       </div>
                    </div>

                </div>

                {/* Main Nav */}
                <div className="col s12 m12 l10" id="mainNav">

                </div>
            </div>
        )
    }
}

export default Home;