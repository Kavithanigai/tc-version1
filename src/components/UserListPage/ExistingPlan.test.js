import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ExistingPlan from './ExistingPlan';

function renderWithStore(initialState, Component) {
  return shallow(
    <Provider store={createStore(state => state, initialState)}>
      <Component />
    </Provider>
  );
}

describe('<ExistingPlan />', () => {
  it('Renders without crashing', () => {
    renderWithStore(
      {
        auth: {
          email: 'browser567@gmail.com',
          password: '12345'
        }
      },
      () => <ExistingPlan />
    );
  });
});
