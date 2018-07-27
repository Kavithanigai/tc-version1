import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import {Link} from 'react-router-dom'; import _  from 'lodash';
import Menu from './menu';
import './UserPlan.css';

class NewUserPlan extends Component{
    renderField(field){
      return (
        <div className="form-group title-cls">
        <label className="form-label">{field.label}</label>
        <input
          type="text"
          {...field.input}
        />
        {field.meta.error}
        </div>
      );
    }
      renderTextAreaField(field){
        return (
          <div className="form-group title-cls">
          <label className="form-label">{field.label}</label>
          <input
            rows="5"
            type="textarea"
            {...field.input}
          />
          {field.meta.error}
          </div>
        );
    }
    onSubmit(values){
      console.log(values);
    }


  render(){
    const {handleSubmit} = this.props;
    return(
      <div className='tc-feature-bcg'>
        <Menu />
         <form className="add-new-form" onSubmit={handleSubmit(this.onSubmit.bind(this))} >
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
             rows="5"
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
             rows="5"
           />

           <Field
            label="Feedback:"
             name="feedback"
             component={this.renderTextAreaField}
             autoComplete="none"
             rows="5"
           />


           <button className="addnewplan-btn" type="submit">Add Plan!</button>
           
         </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  //Validate inputs
  if(!values.title){
    errors.title = "Enter a title!";
  }
  if(!values.destination){
    errors.destination = "Enter a destination!";
  }

  return errors;
}

export default reduxForm({validate, form: 'addnewplan'})(NewUserPlan);
