import React from "react";

// Another way to write component
// if you return 'one parametere' with arrow function you can ==>  delete ()
// if you return 'one element' (div) you can return without return() ==>  only () 

const Weather = props => 
        (
        <div> 
            {
            props.city && props.country && 
            <p className="weather__key">location: 
                <span className="weather__value"> {props.city}, {props.country}</span>   
            </p>
            }
            {
            props.temperature &&  
            <p className="weather__key">Temperature : 
                <span className="weather__value"> {props.temperature}</span>
            </p>
            }
            {
            props.humidity && 
            <p className="weather__key">Humidity: 
                <span className="weather__value"> {props.humidity}</span>
            </p>
            }
            {
            props.description && 
            <p className="weather__key">Condtion: 
                <span className="weather__value"> {props.description}</span>
            </p>
            } 
            {
            props.error && 
            <p className="weather__key">
                <span>{props.error}</span>
            </p>
            }  
        </div>
    );
// class Weather extends React.Component{
//     render(){
//         return(
//             <div>
//                 {this.props.city && this.props.country && <p>location: {this.props.city}, {this.props.country}</p>}
//                 {this.props.temperature &&  <p>Temperature : {this.props.temperature}</p>}
//                 {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//                 {this.props.description && <p>Condtion: {this.props.description}</p>} 
//                 {this.props.error && <p>{this.props.error}</p>}  
//             </div>
//         );
//     }
// };
export default Weather;