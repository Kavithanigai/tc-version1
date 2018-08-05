import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost, updatePost } from '../../actions';
import Menu from './Menu';
import './UserPlan.css';

class PlanView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/userplan/existing');
    });
  }

  onUpdateClick() {
    console.log(`userplans ${this.props.userplan.id}`);
    this.props.history.push(`/userplan/update/${this.props.userplan.id}`);
  }

  splitString(str) {
    if (str) {
      let newString = str.split(/\n|\t/);
      console.log(newString);
      return (
        <ul className="packinglist-ul" key="st1[index]">
          {newString.map(st1 => <li>{st1}</li>)}
        </ul>
      );
    } else {
      return '';
    }
  }

  render() {
    const { userplan } = this.props;
    if (!userplan) {
      return <div>Loading ... </div>;
    }

    return (
      <div className="tc-feature-bcg">
        <Menu />
        <div className="planview">
          <Link to="/userplan/existing">
            <button className="planview-btn" type="submit">
              Back to Plans
            </button>
          </Link>
          <Link to="/searchWeather">
            <button className="planview-btn" type="submit">
              Check Weather
            </button>
          </Link>
          <button
            className="planview-btn"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete Plan
          </button>
          <div>
            <p> Update plan reserved for later release. </p>
          </div>
          <div className="plan-title">
            <h2>Title: {userplan.title}</h2>
          </div>
          <br />
          <div className="plan-dest">
            <br />
            <h4>
              <center>Destination:</center>
            </h4>
            <br /> <p>{userplan.destination}</p>
          </div>
          <div className="plan-pack">
            <br />
            <h4>
              <center>Packing List:</center>
            </h4>
            <br /> {this.splitString(userplan.packinglist)}
          </div>

          <div className="plan-notes">
            <br />
            <h4>
              <center>Trip Notes:</center>
            </h4>
            <br /> <p>{userplan.tripnotes}</p>
          </div>

          <div className="plan-feedback">
            <br />
            <h4>
              <center>Feedback:</center>
            </h4>
            <br /> <p>{userplan.feedback}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ userplans }, ownProps) {
  return { userplan: userplans[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PlanView);
