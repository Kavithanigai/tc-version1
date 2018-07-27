import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import LandingPageMain from './components/LandingPage/LandingPageMain';
import Explore from './components/LandingPage/Explore';
import UserTestimonials from './components/LandingPage/UserTestimonials';
import SignUpLogin from './components/LandingPage/SignUpLogin';
import SignUp from './components/LandingPage/auth/SignUp';
import SignIn from './components/LandingPage/auth/SignIn';
import Demo from './components/LandingPage/auth/Demo';
import NewUserPlan from './components/UserListPage/NewUserPlan';
import ExistingUserPlan from './components/UserListPage/ExistingPlan';
import Signout from './components/LandingPage/auth/Signout';
import './index.css';
// import store from './store';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

 const newstore = createStore(
  reducers,
  { auth:{authenticated: localStorage.getItem('token')}},
  applyMiddleware(reduxThunk)
 );

ReactDOM.render(
  <Provider store={newstore}>
    <BrowserRouter>
      <App>
          <Route exact path ="/" component={LandingPageMain}/>
          <Route exact path ="/explore" component={Explore}/>
          <Route exact path ="/usertestimonials" component={UserTestimonials}/>
          <Route exact path ="/signuplogin" component={SignUpLogin}/>
          <Route exact path ="/signup" component={SignUp}/>
          <Route exact path ="/signin" component={SignIn}/>
          <Route exact path ="/demo" component={Demo}/>
          <Route exact path ="/userplan/add" component={NewUserPlan}/>
          <Route exact path ="/userplan/existing" component={ExistingUserPlan}/>
          <Route exact path ="/signout" component={Signout}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
// registerServiceWorker();
