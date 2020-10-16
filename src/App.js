import React from 'react';
import './App.css';
import GlobalStyle from './components/theme/GlobalStyle'
import { Homepage } from './components/home/Home'
import Store from './components/theme/store'

function App() {
  return (
    <div className="App">
      <Store>
        <GlobalStyle />
        <Homepage />
      </Store>
    </div>
  );
}

export default App;
