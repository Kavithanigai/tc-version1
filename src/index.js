import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import LandingPageMain from './components/LandingPage/LandingPageMain';
import Explore from './components/LandingPage/Explore';
import UserTestimonials from './components/LandingPage/UserTestimonials';
import SignUpLogin from './components/LandingPage/SignUpLogin';
import SignUp from './components/LandingPage/auth/SignUp';
import SignIn from './components/LandingPage/auth/SignIn';
// import Demo from './components/LandingPage/auth/Demo';
import NewUserPlan from './components/UserListPage/NewUserPlan';
import PlanView from './components/UserListPage/TravelPlanView';
import UpdateUserPlan from './components/UserListPage/UpdateUserPlan';
import ExistingUserPlan from './components/UserListPage/ExistingPlan';
import WeatherMap from './components/UserListPage/WeatherMap';
import Signout from './components/LandingPage/auth/Signout';
import './index.css';
// import store from './store';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const newstore = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={newstore}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={LandingPageMain} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/usertestimonials" component={UserTestimonials} />
          <Route exact path="/signuplogin" component={SignUpLogin} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/userplan/add" component={NewUserPlan} />
          <Route exact path="/userplan/existing" component={ExistingUserPlan} />
          <Route exact path="/userplan/:id" component={PlanView} />
          <Route exact path="/searchWeather" component={WeatherMap} />
          <Route exact path="/userplan/update/:id" component={UpdateUserPlan} />
          <Route exact path="/signout" component={Signout} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
