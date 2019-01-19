import React from 'react';
import ReactDOM from 'react-dom';
import Users from './Users';

const userList = [
    {id: 2341, name: 'Carl Malone', online: true},
    {id: 6324, name: 'Scotty Pippen', online: false}
]

const currentUser = 'Carl Malone' 

// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Users currentUser={currentUser} userList={userList} />, div);
  ReactDOM.unmountComponentAtNode(div);
});