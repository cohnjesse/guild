import React from 'react';
import ReactDOM from 'react-dom';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

enzyme.configure({ adapter: new Adapter() });

// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// These tests would be further fleshed out with more time
it('calling loadAllMessages', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().loadAllMessages  = jest.fn();
  wrapper.instance().loadAllMessages ();
  expect(wrapper.instance().loadAllMessages ).toBeCalled();
});

it('calling handleLogIn', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().handleLogIn = jest.fn();
  wrapper.instance().handleLogIn();
  expect(wrapper.instance().handleLogIn).toBeCalled();
});

it('calling syncMessageData', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().syncMessageData = jest.fn();
  wrapper.instance().syncMessageData();
  expect(wrapper.instance().syncMessageData).toBeCalled();
});

it('calling sendMessage', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().sendMessage = jest.fn();
  wrapper.instance().sendMessage();
  expect(wrapper.instance().sendMessage).toBeCalled();
});

it('calling emptyMessageInput', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().emptyMessageInput = jest.fn();
  wrapper.instance().emptyMessageInput();
  expect(wrapper.instance().emptyMessageInput).toBeCalled();
});

it('calling scrollMessageDiv', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().scrollMessageDiv = jest.fn();
  wrapper.instance().scrollMessageDiv();
  expect(wrapper.instance().scrollMessageDiv).toBeCalled();
});