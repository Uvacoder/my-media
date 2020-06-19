import React from 'react';
import './App.css';
import Books from './Books'
import Movies from './Movies'
import Tv from './Tv'




function App() {

  

  return (
    <div className="App">
      
         <a href="https://scottjellen.me/" target="_blank" rel="noopener noreferrer">
          <img src="https://s3.us-east-2.amazonaws.com/scottjellen.me.projectlist/sJellenLogo.jpg"
          alt="logo"
          className="logo"
          />
         </a>
          
      <h1 className="main_title">Media Consumption</h1>

     
     
     <Books />
     <Movies />
     <Tv />


     <h1 className="copy_footer"> by Scott Jellen  &#169; 2020</h1>
    </div>
  );
}

export default App;
