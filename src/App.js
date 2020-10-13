import React from 'react';
import './App.css';
import GlobalStyle from './components/theme/GlobalStyle'
import { Homepage } from './components/home/Home'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Homepage />
    </div>
  );
}

export default App;
