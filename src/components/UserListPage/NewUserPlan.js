import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
// import _  from 'lodash';
import Menu from './Menu';
import './UserPlan.css';

class NewUserPlan extends Component {
  renderField(field) {
    return (
      <div className="form-group title-cls">
        <label className="form-label">{field.label}</label>
        <input type="text" {...field.input} />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }
  renderTextAreaField(field) {
    return (
      <div className="form-group title-cls">
        <label className="form-label">{field.label}</label>
        <textarea rows="3" {...field.input} />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit(values) {
    // console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push('/userplan/existing');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="tc-feature-bcg">
        <Menu />
        <form
          className="add-new-form"
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <h2 className="add-newform-h2">Add New Plan</h2>

          <Field
            label="Title:"
            name="title"
            component={this.renderField}
            autoComplete="none"
          />

          <Field
            label="Packing list:"
            name="packinglist"
            component={this.renderTextAreaField}
            autoComplete="none"
          />

          <Field
            label="Destination:"
            name="destination"
            component={this.renderField}
            autoComplete="none"
          />

          <Field
            label="Trip Notes:"
            name="tripnotes"
            component={this.renderTextAreaField}
            autoComplete="none"
          />

          <Field
            label="Feedback:"
            name="feedback"
            component={this.renderTextAreaField}
            autoComplete="none"
          />

          <button className="addnewplan-save-btn" type="submit">
            Add Plan
          </button>

          <Link to="/userplan/existing">
            <button className="addnewplan-cancel-btn" type="submit">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  //Validate inputs
  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (!values.destination) {
    errors.destination = 'Enter a destination!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'addnewplan'
})(
  connect(
    null,
    { createPost }
  )(NewUserPlan)
);
