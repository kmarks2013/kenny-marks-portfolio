import React from 'react';
import './App.css';
import ContentContainer from './containers/ContentContainer';
import NavBar from './containers/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ContentContainer/>
    </div>
  );
}

export default App;
