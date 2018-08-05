import React from 'react';
import { shallow } from 'enzyme';

import WeatherMap from './WeatherMap';
import Menu from './Menu';
import WeatherForm from './WeatherForm';

describe('<WeatherMap />', () => {
  it('Renders without crashing', () => {
    shallow(<Menu />);
    shallow(<WeatherForm />);
  });
});
