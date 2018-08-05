import React,{Component} from 'react';

class WeatherForm extends Component{
  render(){
    return(
      <form className='weather-form' onSubmit={this.props.getWeather}>
      <input type="text"  name="city"  placeholder="City..."/>
      <input type="text" name="country" placeholder="Country..."/>
      <button type="submit" >Check Weather</button>
      </form>
  );
  }
}

export default WeatherForm;
