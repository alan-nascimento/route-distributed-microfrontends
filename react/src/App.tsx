import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'header/custom-header';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'custom-header': any
    }
  }
}

function App() {
  return (
    <div className="App">
      <custom-header react />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
