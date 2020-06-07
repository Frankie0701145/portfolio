import React, {Component} from "react";
import "./Home.component.css";
import "../../node_modules/materialize-social/materialize-social.css";


class Home extends Component {

    render(){
        return (
            <div className="row" id="homeWrapper">
                                                 {/* Side Div*/}
                    <div className="col s3 red lighten-4" id="sideContent">
                        
                                            {/* Profile*/}

                         <div className="col s12">

                                      {/* Profile picture  */}
                                <div className="col s12 center-align info">
                                    <img src="images/profile.jpg" alt="" className="circle responsive-img" id="profilePic"/>
                                </div>

                                            {/* Name */}
                                <div className="col s12 center-align info">
                                        Francis Njuguna
                                </div>

                                    {/* Description */}
                                <div className="col s12 info">
                                    Hi,I my name is Francis Njuguna and I am Full Stack Developer. Welcome to my personal website
                                </div>

                                    {/* Social Media icons */}
                                <div className="col s12">
                                    <div className="row">
                                        <a className="waves-effect waves-light btn social google">
                                            <i className="fa fa-google"></i> Sign in with Google
                                        </a>
                                    </div>
                                </div>

                                    {/* Nav Links */}
                                <div className="col s12">
                                      <a className="col s12" href="#">About Me</a>
                                      <a className="col s12" href="#">Portfolio</a>
                                      <a className="col s12" href="#">Skills</a>
                                </div>
         
                         </div>

                    </div>

                                       {/*  Main Div */}
                    <div className="col s7 border">
                        <span className="red-text">Red</span>
                    </div> 

            </div>  
        )
    }
}

export default Home;