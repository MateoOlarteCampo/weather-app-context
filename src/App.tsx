import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Home />
    </div>
  );
}

export default App;
