import React, {Component} from 'react';
import "./Skills.component.css";

class Skills extends Component{
    render(){
        return(
            <div id="skillsWrapper">

                <div className="row">
                    <div className="col s12 center-align">
                        <h3 className="col offset-l5 red-text darken-3 ">
                            <span className="heading">Skills.</span>
                        </h3>
                    </div> 
                </div>

                <div className="container">
                    <div className="row">
                            <div className="col s12">
                                <h6 className="title">Skills Overview</h6>
                            </div>
                            <div className="col s12">
                                    <p>
                                        I am a full-stack developer specialized in frontend and backend development for complex
                                        scalable web apps.
                                    </p>
                            </div>
                    </div>

                    <div className="row skillsWrapper">

                            {/* Frontend */}
                            <div className="col s12 m6">
                                <div className="card small">
                                    {/* A round picture */}
                                    <i className="material-icons imgRound align-center">web</i>
                                    <div className="card-content blue">
                                        <h6 className="card-title center-align">Frontend</h6>
                                        <ul>
                                            <li>React/Redux</li>
                                            <li>Angular/NgRx</li>
                                            <li>HTML/CSS/SASS/LESS</li>
                                            <li>Material/Bootstrap/Ant Design</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="col s12 m6">
                                <div className="card small">
                                    {/* A round picture */}
                                    <i className="material-icons imgRound align-center">web</i>
                                     <div className="card-content blue">
                                        <h6 className="card-title center-align">Backend</h6>
                                        <ul>
                                            <li>Node</li>
                                            <li>Ruby/Rails</li>
                                            <li>MongoDb/PostgreSQL</li>
                                            <li>Redis</li>
                                        </ul>
                                     </div>
                                </div>
                            </div>

                            {/* Devops */}
                            <div className="col s12 m6">
                                <div className="card small">
                                    {/* A round picture */}
                                    <i className="material-icons imgRound align-center">web</i>
                                    <div className="card-content blue">
                                        <h6 className="card-title center-align">Devops</h6>
                                        <ul>
                                            <li>Continuous Integration</li>
                                            <li>Continuous Development</li>
                                            <li>Nginix</li>
                                            <li>Docker</li>
                                        </ul>
                                    </div>
                                </div>      
                            </div>

                            {/* Others */}
                            <div className="col s12 m6">
                                <div className="card small">
                                    {/* A round picture */}
                                    <i className="material-icons imgRound align-center">web</i>
                                    <div className="card-content blue">
                                        <h6 className="card-title center-align">Others</h6>
                                        <ul>
                                            <li>UI/UX</li>
                                            <li>React Native</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                                                        {/* Languages */}
                            <div className="col s12 m7 offset-m3" id="last-child">
                                <div className="card small">
                                    {/* A round picture */}
                                    <i className="material-icons imgRound align-center">web</i>
                                    <div className="card-content blue">
                                        <h6 className="card-title center-align">Programming</h6>
                                        <ul>
                                            <li>JavaScript/NodeJs/TypeScript</li>
                                            <li>Ruby</li>
                                            <li>Python</li>
                                            <li>Java</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Skills