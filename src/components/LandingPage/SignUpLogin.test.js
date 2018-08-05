import React from 'react';
import { shallow } from 'enzyme';

import SignUpLogin from './SignUpLogin';

describe('<SignUpLogin />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUpLogin />);
  });
});
