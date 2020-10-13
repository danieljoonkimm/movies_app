import React from 'react';

import './App.css';
import GlobalStyle from './components/theme/GlobalStyle'
import { Homepage } from './components/homepage/Homepage'

import { Card } from './components/Card'
import { data } from './components/data'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Homepage /> */}
      {data.map(person => (
        <Card>
          <Card.Body>
            <Card.Title>{person.first_name}</Card.Title>
            <Card.Text>{person.gender}</Card.Text>
            <Card.Button></Card.Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
