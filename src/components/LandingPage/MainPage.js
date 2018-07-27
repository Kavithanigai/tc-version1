import React from 'react';
import {Link} from 'react-router-dom';
import './MainPage.css';


const MainPage =(props) => {
return(
     <div id="hero">

     <div id="bck-image">

      <div className="hero-center">
      <img src={require('../img/newTcLogo2.png')} className='logoImage' alt='tclogo'/>
      <div className="hero-title">
      <h1>Welcome to Travel Complete
      <p className='head-par' >Better to see something once than hear about it a thousand times.</p></h1>
      </div>
      <Link to="/explore" style={{ textDecoration: 'none' }}>
      <button type='submit'>Show Me More</button>
      </Link>
      <Link to="/signuplogin" style={{ textDecoration: 'none' }}>
      <button type='submit'>Explore App</button>
      </Link>
      </div>

      </div>

    </div>
  );
}


export default MainPage;
