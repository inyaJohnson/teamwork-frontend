import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import expect from 'expect';

test('Renders components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<div className="App"></div>)).toEqual(false);
});
