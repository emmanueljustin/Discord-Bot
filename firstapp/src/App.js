import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Emmanuel" nickName="Emman">
        <p>This is Children</p>
      </Greet>
      <Greet name="Carlo" nickName="Carlito">
        <button>Press Me!</button>
      </Greet>
      <Greet name="Angelica" nickName="Ethan" />
      <Welcome name="Emmanuel" nickName="Emman" />
      <Welcome name="Carlo" nickName="Carlito" />
      <Welcome name="Angelica" nickName="Ethan" />
      {/*<Hello />*/}
    </div>
  );
}

export default App;
