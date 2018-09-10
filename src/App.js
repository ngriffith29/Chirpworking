import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Navbar.jsx'
import Navbar from './Navbar.jsx';
import Form from './Form'
import Timeline from './Timeline.jsx'
import SendChirp from './SendChirp'
class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Form />
      </div>
    );
  }
}

export default App;
