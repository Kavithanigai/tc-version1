import React from 'react';
import { shallow } from 'enzyme';

import WeatherMap from './WeatherMap';

describe('<WeatherMap />', () => {
  it('Renders without crashing', () => {
    shallow(<WeatherMap />);
  });
});
