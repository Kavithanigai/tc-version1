import React, { Component } from 'react';
import { reduxForm, Field, initialize } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../../actions';
// import _  from 'lodash';
import Menu from './Menu';
import NewUserPlan from './NewUserPlan';
import './UserPlan.css';

class UpdateUserPlan extends Component {
  // state = {
  //   title: this.props.userplan ? this.props.userplan.title : '',
  //   destination: this.props.userplan ? this.props.userplan.destination : ''
  // };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    //
    // //this.handleInitialize();
  }

  // handleInitialize() {
  //   const initData = {
  //     id: this.props.id,
  //     title: this.props.userplan.title,
  //     packinglist: this.props.packinglist,
  //     destination: this.props.destination,
  //     tripnotes: this.props.tripnotes,
  //     feedback: this.props.feedback
  //   };
  //   console.log(initData.title);
  //   this.props.initialize(initData);
  // }

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

  // onUpdate() {
  //   console.log(`userplans ${this.props.userplan.id}`);
  //   console.log(`${this.props.userplan.title}`);
  // }
  onSubmit(values) {
    // console.log(values);
    this.props.updatePost(values, () => {
      this.props.history.push('/userplan/existing');
    });
  }

  render() {
    const { userplan } = this.props;
    const { handleSubmit } = this.props;
    if (!userplan) {
      return <div>Loading ... </div>;
    }
    return (
      <div className="tc-feature-bcg">
        <Menu />
        <div>
          <form
            className="add-new-form"
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
          >
            <h2 className="add-newform-h2">Update Plan</h2>

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
              Update Plan
            </button>

            <Link to="/userplan/existing">
              <button className="addnewplan-cancel-btn" type="submit">
                Cancel
              </button>
            </Link>
          </form>
        </div>
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

function mapStateToProps({ userplans }, ownProps) {
  return { userplan: userplans[ownProps.match.params.id] };
}

// function mapStateToProps(state, props) {
//   if (props.params._id) {
//     return {
//       userplan: state.userplans.find(
//         userplan => userplan._id === props.params._id
//       )
//     };
//   }
//   return { userplan: null };
// }

export default reduxForm({
  validate,
  form: 'updateplan'
})(
  connect(
    mapStateToProps,
    { fetchPost, updatePost }
  )(UpdateUserPlan)
);
