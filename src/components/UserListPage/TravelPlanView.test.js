import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PlanView from './TravelPlanView';

function renderWithStore(initialState, Component) {
  return shallow(
    <Provider store={createStore(state => state, initialState)}>
      <Component />
    </Provider>
  );
}

describe('<PlanView />', () => {
  it('Renders without crashing', () => {
    renderWithStore(
      {
        auth: {
          email: 'browser567@gmail.com',
          password: '12345'
        }
      },
      () => <PlanView />
    );
  });
});
