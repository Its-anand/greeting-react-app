import { ReactDOM } from 'react';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
    </div>
  );
}
function Name(){
  return(
    <React.Fragment>
      <h1>Hello 2</h1>
      <h1>Hello 3</h1>
    </React.Fragment>
  )
}
export default App;
