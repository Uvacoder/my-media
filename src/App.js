import React from 'react';
import './App.css';
import Books from './Books'
import Movies from './Movies'
import Tv from './Tv'
import Footer from './Footer'
import Header from './Header'
import IconNav from './IconNav'


function App() {

  return (
    <div className="App">
    <IconNav />
     <Header />
     <Movies />
     <Tv />
     <Books />
     <Footer />
    </div>
  );
}

export default App;
