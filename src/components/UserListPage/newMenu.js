import React from 'react';
import { Link } from 'react-router-dom';
import './UserPlan.css';

const Menu = props => {
  return (
    <div className="nav-main-menu">
      <img
        src={require('../img/newTcLogo2.png')}
        className="logoImage1"
        alt="tclogo"
      />
      <nav>
        <ul className="main-nav">
          <li>
            <Link to="/signout">Log Out</Link>
          </li>
          <li>
            <Link to="/userplan/existing">Existing Plan</Link>
          </li>
          <li>
            <Link to="/userplan/add">Add Plan</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
