import React from 'react';

import { Text, View } from 'react-primitives'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <View>
      <header className="App-header">
        <Text style={{color: 'gold', fontSize: 48}}>
          ☆ Test app ☆
        </Text>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </View>
  );
}

export default App;
