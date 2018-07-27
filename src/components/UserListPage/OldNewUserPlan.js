import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import requireAuth from '../requireAuth';
// import {fetchPosts} from '../../actions';
import {Link} from 'react-router-dom';
// import _  from 'lodash';
import Menu from './menu';
import './UserPlan.css';
import {reduxForm,Field} from 'redux-form';
//
// import {compose} from 'redux';
// import {connect} from 'react-redux';
// import * as actions from '../../../actions';

class OldNewUserPlan extends Component{
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

           <div className="form-group title-cls">
           <label className="form-label ">Title:</label>
           <input
             name="email"
             type="text"
             component="input"
             autoComplete="none"
           />
           </div>

           <div className="form-group">
           <label className="form-label">Packing List:</label>
           <textarea
           name="packinglist"
           component="input"
           autoComplete="none"
           rows="5"
           />
           </div>

           <div className="form-group">
           <label className="form-label">Destination:</label>
           <input
           name="destination"
           type="text"
           component="input"
           autoComplete="none"
           />
           </div>

           <div className="form-group">
           <label className="form-label">Trip Notes:</label>
           <textarea
           name="tripnotes"
           component="input"
           autoComplete="none"
           rows="5"
           />
           </div>

           <div className="form-group">
           <label className="form-label">Feedback:</label>
           <textarea
           name="Feedback"
           component="input"
           autoComplete="none"
           rows="5"
           />
           </div>

           <Link to="/userplan/existing" >
           <button className="addnewplan-btn">Add Plan!</button>
           </Link>
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
    errors.title = "Enter a destination!";
  }
  return errors;
}

export default reduxForm({validate, form: 'oldaddnewplan', fields: ['title','packinglist','destination','tripnotes','feedback']})(OldNewUserPlan);
