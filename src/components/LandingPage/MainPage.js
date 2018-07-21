import React from 'react';
import './MainPage.css';


const MainPage = (props) => {
  return(
    <div id="hero">

      <div id="bck-image">

      <div className="hero-center">
      <img src={require('../img/newTcLogo2.png')} className='logoImage' alt='tclogo'/>
      <div className="hero-title">
      <h1>Welcome to Travel Complete
      <p className='head-par' >Better to see something once than hear about it a thousand times.</p></h1>
      </div>
      <button type='submit'>Show Me More</button>
      <button type='submit'>Explore The App</button>
      </div>

      </div>

    </div>
  );
}

export default MainPage;
