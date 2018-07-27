import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../../actions';
import './SignIn.css';


class SignIn extends Component{
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/userplan/existing');
    });

  };

  render(){
    const {handleSubmit} = this.props;
    return(
      <div className="form-bcg">
      <form className="login-form login-register-form login-box" onSubmit={handleSubmit(this.onSubmit)}>
      <img src={require('../../img/newTcLogo2.png')} className='logoImage' alt='tclogo'/>
      <h2>SignIn Form</h2>

        <fieldset className="form-group">
        <label>Email</label>
        <Field
          name="email"
          type="text"
          component="input"
          autoComplete="none"
        />
        </fieldset>

        <fieldset className="form-group">
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
        </fieldset>
        <div className='error-danger'>{this.props.errorMessage}</div>
        <button>Sign In!</button>
          <p className="signupPar">Not yet registered? <Link to="/signup"  className="login-trigger link signupLink">Sign Up!</Link></p>
      </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {errorMessage: state.auth.errorMessage};
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({form: 'signin'})
)(SignIn);
