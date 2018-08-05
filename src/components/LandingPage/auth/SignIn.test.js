import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './SignIn';

describe('<SignIn />', () => {
  it('Renders without crashing', () => {
    shallow(<SignIn />);
  });
});
