import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';

const messages = [
    { id: 1, sender: 'Carl Malone', text: 'Hey there how are you?'},
    { id: 2, sender: 'Scotty Pippen', text: 'Im great, you?'}
  ]

  // smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Messages messageList={messages} />, div);
  ReactDOM.unmountComponentAtNode(div);
});