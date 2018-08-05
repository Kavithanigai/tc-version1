import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {compose} from 'redux';
import _ from 'lodash';
// import requireAuth from '../requireAuth';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';
import Menu from './Menu';
import './UserPlan.css';

class ExistingUserPlan extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    // console.log('Good time to call action creator');
  }

  renderPosts() {
    console.log(`userplans ${this.props.userplans}`);
    return _.map(this.props.userplans, userplan => {
      return (
        <li className="list-group-item" key={userplan.id}>
          <Link to={`/userplan/${userplan.id}`}>{userplan.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="tc-feature-bcg">
        <Menu />
        <div>
          <h3 className="ex-plans">Existing Plans!</h3>
          <ul className="list-group">{this.renderPosts()}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(' In mapStateToProps');
  //console.log( state);
  return { userplans: state.userplans };
}

console.log('Hello');

export default connect(
  mapStateToProps,
  { fetchPosts }
)(ExistingUserPlan);
