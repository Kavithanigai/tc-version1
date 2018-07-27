import React from 'react';
import './SignUpLogin.css';
import {Link} from 'react-router-dom';


const SignUpLogin = (props) => {
  return(
    <div id='airplane-image'>
    <div className='signupLogin'>

      <div className='signup'>
        <h2>Ready to dive into world of travel planning?</h2>
        <h4>It's Easy, just enter your email to signup.</h4>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
        <button className='signupBtn'>SignUp</button>
        </Link>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
        <button className='loginBtn1'>Login</button>
        </Link>
      </div>

      <div className='explore-app'>
        <h2>Not ready yet? Explore with our demo account.</h2>
        <Link to="/demo" style={{ textDecoration: 'none' }}>
        <button className='exploreBtn'>Explore Demo</button>
        </Link>
      </div>

    </div>
    </div>
  );

}

export default SignUpLogin;
