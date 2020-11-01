import logo from './logo.svg';
import './App.css';
import Task from './componets/task/Task.styled'
import PropTypes from 'prop-types';
import React from 'react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <Task task = {{
        'id': '1',
        'title': '',
        'state': ''
      }}
      onArchiveTask = {()=>{}}
      onPinTask = {()=>{}}
      />

    </div>
  );
}

export default App;
