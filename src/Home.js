import React from 'react';
import './App.css';
import './assets/andrei.jpg';
import ryerson from './assets/ryerson.png';
import java from './assets/java.png';
import C from './assets/C.png';
import Cplus from './assets/C++.png';
import JS from './assets/JS.png';
import Matlab from './assets/matlab.png';
import etap from './assets/etap.svg';



function Home() {
  return (
    <div id="home">
      <div className="App-aboutBG">
        <p className="App-aboutName">About Me</p>

        <content className="App-body">
          <p>My Name is Andrei Frunza.</p>
          
          <p>I'm in my final year at Ryerson University, completing my bachelors in Electrical Engineering.</p>
            
          
          <p>Throughout my time at Ryerson, I worked in the following languages,</p>
          
          <div className="App-links">
            <img src={java} className="App-ImageR"/>
            <img src={C} className="App-ImageR"/>
            <img src={Cplus} className="App-ImageR"/>
            <img src={JS} className="App-ImageR"/>
          </div>

          <p>and with the following programs</p>

          <div className="App-links">
            <img src={Matlab} className="App-ImageR"/>
            <img src={etap} className="App-ImageR"/>
      
          </div>

        </content>
 
      </div>
      
      
    </div>
  );
}

export default Home;