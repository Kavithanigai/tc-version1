import React from 'react';
import SignIn from './SignIn';
import './SignIn.css';

const Demo = (props) => {
  return(
    <div className="form-bcg">
      <div className="demo-div">
       <h3 className='demo-h3'>Demo Account:</h3>
       <p className='demo-p1'>Email : browser345@gmail.com</p>
       <p className='demo-p2'>Password: 12345</p>
       </div>
       <SignIn />
    </div>
  );
}

export default Demo;
