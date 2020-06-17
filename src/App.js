import React from 'react';
import './App.css';
import Books from './Books'
import Movies from './Movies'
import Tv from './Tv'




function App() {

  

  return (
    <div className="App">
     <h1 className="main_title">Media Consumption</h1>
     <Books />
     <Movies />
     <Tv />
    </div>
  );
}

export default App;
