import React,{Component} from 'react';

class Weather extends Component{
  render(){
    return(
      <div>
      Weather At The Moment:
      {this.props.city && this.props.country && <p className="weather-display">Location: {this.props.city}, {this.props.country}</p>}
      {this.props.temperature && <p className="weather-display">Temperature(C): {this.props.temperature}</p>}
      {this.props.humidity && <p className="weather-display">Humidity(%): {this.props.humidity}</p>}
      {this.props.description && <p className="weather-display">Conditions: {this.props.description}</p>}
      {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
