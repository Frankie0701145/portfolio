import React, {Component} from 'react';
import "./Portfolio.component.css";

class Portfolio extends Component{
    render(){
        return(
                <div className="row">
                   <div className="col s12 center-align">
                       <h3 className="col offset-l5 red-text darken-3 ">
                           <span className="heading">Portfolio.</span>
                        </h3>
                   </div> 
                </div>
            
        )
    }
}

export default Portfolio;