import React from 'react';
import { shallow } from 'enzyme';

import Explore from './Explore';

describe('<Explore />', () => {
  it('Renders without crashing', () => {
    shallow(<Explore />);
  });
});
