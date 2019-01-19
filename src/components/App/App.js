import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Users from '../Users/Users'
import Messages from '../Messages/Messages'
import Login from '../Login/Login'
import './App.css';

const firebaseConfig = {
  serviceAccount: '../guild-dab64d12b333.json',
  databaseURL: 'https://guild-16e4e.firebaseio.com',
}

let dbRef;
let typingRef;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      currentUser: null,
      allUsers: [
        {id: 2341, name: 'Carl Malone'},
        {id: 6324, name: 'Scotty Pippen'}
      ],
      messages : [],
      userTyping: false
    }
  }

  componentDidMount = () => {

    // Set up firebase connection
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    dbRef = firebase.database().ref('messages');

    this.loadAllMessages();
    this.syncMessageData();

  }

  /**
   * @description Method to load all messages from Firebase and add to state
   */
  loadAllMessages = () => {

    let self = this;

    let messages = [];

    dbRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        messages.push(childSnapshot.val());
        self.setState({
          messages : messages
        });
      });
    });

  }

  /**
   * @description Mock a login process buy setting state to the user chosen
   * @fires this.scrollMessageDiv
   */
  handleLogIn = (e) => {

    let user = e.target.dataset.name;

    this.setState({
      currentUser: user,
      loggedIn: true
    });

    this.scrollMessageDiv();
    
  }
  
  /**
   * @description Use 'child_added' method from Firebase to update state when a new message is added
   * @fires dbRef.on('child_added')
   */
  syncMessageData = () => {

    let self = this;

    let messages = [];

    dbRef.on('child_added', function(data) {
      
      messages.push(data.val());

      self.setState({
        messages : messages
      });

    }); 

  }

  /**
   * @description Method to send a new message to Firebase
   * @fires this.emptyMessageInput
   */
  sendMessage = (e) => {

    e.preventDefault();

    let messageInput = document.querySelector(".message-input");

    dbRef.push({
      id: Date.now(),
      sender: this.state.currentUser,
      text: messageInput.value
    });

    this.emptyMessageInput(messageInput); 

  }

  /**
   * @description Helper method to clear a given input
   */
  emptyMessageInput = (selector) => {
    selector.value = "";
  }

  /**
   * @description method to scroll to the bottom of the messages div when it gets filled
   */
  scrollMessageDiv = () => {

    var messageDiv = document.querySelector(".messages");

    var windowDiv = document.querySelector("body");

    messageDiv.scrollTo(0, (messageDiv.clientHeight + windowDiv.clientHeight) * 2);

  }

  render = () => {
    return (
      <div className="App">
        <Login logInUser={this.handleLogIn} loggedIn={this.state.loggedIn}/>
        <Users currentUser={this.state.currentUser} userList={this.state.allUsers}/>
        <Messages sendMessage={this.sendMessage} messageList={this.state.messages} />
      </div>
    );
  }
}

export default App;
