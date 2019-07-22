import React from 'react';
import logo from './logo.svg';
import './App.css';

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  console.log(event.origin);
  console.log(event.data);

  if (event.origin !== "http://example.org:8080")
    return;

  // ...
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span id="tSpan">ABDC</span>
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
          Learn React 1
        </a>
      </header>
    </div>
  );
}

export default App;
