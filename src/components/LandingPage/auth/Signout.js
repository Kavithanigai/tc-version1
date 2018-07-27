import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../../actions';
import './Signout.css';


class Signout extends Component{
  componentDidMount(){
    this.props.signout();
  }
  render(){
    return(
      <div className="form-bcg1">
      <div className='logout-page'>
        <h2>Sorry to see you go.</h2>
        <p>Ready to go back and explore more!!</p>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <button type="submit" className='home-btn'>Home</button>
        </Link>
        <Link to='/signin' style={{ textDecoration: 'none' }}>
            <button type="submit" className='home-btn'>SignIn</button>
        </Link>
      </div>
      </div>
    );
  }
}

export default connect(null,actions)(Signout);
