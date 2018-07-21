import React from 'react';
import './SignUpLogin.css';

const SignUpLogin = (props) => {
  return(
    <div id='airplane-image'>
    <div className='signupLogin'>

      <div className='signup'>
        <h2>Ready to dive into world of travel planning?</h2>
        <h4>It's Easy, just enter your email to signup.</h4>
        <button className='signupBtn'>SignUp</button>
        <button className='loginBtn'>Login</button>
      </div>

      <div className='explore-app'>
        <h2>Not ready yet? Explore with our demo account.</h2>
        <button className='exploreBtn'>Explore</button>
      </div>

    </div>
    </div>
  );

}

export default SignUpLogin;
