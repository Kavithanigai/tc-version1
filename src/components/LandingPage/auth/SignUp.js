import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import './SignUp.css';

class SignUp extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/signin');
    });

    console.log(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="form-bcg ">
        <form
          className="signup-form login-register-form reg-box"
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <img
            src={require('../../img/newTcLogo2.png')}
            className="logoImage"
            alt="tclogo"
          />
          <h2>SignUp Form</h2>
          <fieldset className="form-group">
            <label className="form-label">Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>

          <fieldset className="form-group">
            <label className="form-label">Username</label>
            <Field
              name="username"
              type="username"
              component="input"
              autoComplete="none"
            />
          </fieldset>

          <fieldset className="form-group">
            <label className="form-label">Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>

          <div className="error-danger">{this.props.errorMessage}</div>

          <button className="signup-btn">Sign Up!</button>
          <p className="loginPar">
            Already have an account?{' '}
            <Link to="/signin" className="login-trigger link loginLink">
              Login here!
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

// function validate(values){
//   const errors = {};
//   //Validate inputs
//   if(!values.title){
//     errors.title = "Enter a title!";
//   }
//   if(!values.destination){
//     errors.destination = "Enter a destination!";
//   }
//
//   return errors;
// }

// export default compose(
//   connect(
//     mapStateToProps,
//     actions
//   ),
//   reduxForm({ form: 'signup' })
// )(SignUp);

export default reduxForm({ form: 'signup' })(
  connect(
    mapStateToProps,
    actions
  )(SignUp)
);
