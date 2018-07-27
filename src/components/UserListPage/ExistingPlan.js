import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
// import requireAuth from '../requireAuth';
import {fetchPosts} from '../../actions';
import Menu from './menu';
import './UserPlan.css';


class ExistingUserPlan extends Component{
  componentDidMount(){
     this.props.fetchPosts();
    // console.log('Good time to call action creator');
  }

  renderPosts(){
    return _.map(this.props.userplans,userplan => {
      return(
        <li className="list-group-item" key={userplan.id}>
          {userplan.title}
        </li>
      );
    });
  }

  render(){
    console.log(this.props.userplans);
    return(
      <div className='tc-feature-bcg'>
        <Menu />
        <div>
          <h3>Existing Plans!</h3>
          <ul className="list-group">
          {this.renderPosts()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {userplans: state.userplans};
}

export default connect(mapStateToProps,{fetchPosts}) (ExistingUserPlan);
