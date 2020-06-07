import React, {Component} from "react";
import {NavLink, Redirect} from 'react-router-dom'
import "./Home.component.css";
import "../../node_modules/materialize-social/materialize-social.css";
import Portfolio from './Portfolio.component';
import Skills from './Skills.component';
import AboutMe from './AboutMe.component';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class Home extends Component {

    render(){
        return (
            <Router>
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
                                <NavLink to="/portfolio" className="col s12 links"> 
                                    <div className="col s12 navLinks">Portfolio</div>
                                </NavLink>
                            </div>

                            <div className="row">
                                <NavLink to="/skills" className="col s12 links">
                                    <div className="col s12 navLinks">Skills </div>
                                </NavLink>
                            </div>
                            <div className="row">
                                <NavLink to="/aboutMe" className="col s12 links">
                                    <div className="col s12 navLinks "> About Me</div>
                                </NavLink>                 
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
                        
                            <Switch>
                                <Route exact path="/">
                                      <Redirect to="/portfolio" />
                                </Route>
                                <Route exact path="/portfolio" component={Portfolio}></Route>
                                <Route exact path="/skills" component={Skills}></Route>
                                <Route exact path="/aboutMe" component={AboutMe}></Route>
                            </Switch>
                    
                    </div>
                </div>
            </Router>
        )
    }
}

export default Home;