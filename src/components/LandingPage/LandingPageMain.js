import React from 'react';
import MainPage from './MainPage';
import Explore from './Explore';
import UserTestimonials from './UserTestimonials';
import SignUpLogin from './SignUpLogin';

const LandingPageMain  = (props) => {
  return(
    <div>
      <MainPage />
      <Explore />
      <UserTestimonials />
      <SignUpLogin />
    </div>
  );
}

export default LandingPageMain;
