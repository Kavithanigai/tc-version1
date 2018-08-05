import React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

describe('<MainPage />', () => {
  it('Renders without crashing', () => {
    shallow(<MainPage />);
  });
});
