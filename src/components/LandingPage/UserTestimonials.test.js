import React from 'react';
import { shallow } from 'enzyme';

import UserTestimonials from './UserTestimonials';

describe('<UserTestimonials />', () => {
  it('Renders without crashing', () => {
    shallow(<UserTestimonials />);
  });
});
