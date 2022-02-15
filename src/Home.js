import React, {useState} from 'react';
import './App.css';
import './assets/andrei.jpg';
import java from './assets/java.png';
import C from './assets/C.png';
import Cplus from './assets/C++.png';
import JS from './assets/JS.png';
import Matlab from './assets/matlab.png';
import etap from './assets/etap.svg';
import { CSSTransition} from 'react-transition-group';



function Home() {
  const [javaLang, setJava] = useState(false);
  const [cLang, setC] = useState(false);
  const [cplus, setCplus] = useState(false);
  const [js, setJs] = useState(false);

  const handleJava = () =>{
    setC(false);
    setCplus(false);
    setJs(false);
    setJava(!javaLang);
  }
  const handleC = () =>{
    setC(!cLang);
    setCplus(false);
    setJs(false);
    setJava(false);
  }
  const handleCplus = () =>{
    setC(false);
    setCplus(!cplus);
    setJs(false);
    setJava(false);
  }
  const handleJs = () =>{
    setC(false);
    setCplus(false);
    setJava(false);
    setJs(!js);
  }


  const Panel = (props) =>{
    return(
          <div className="App-accordian">
            <p className="accordName">{props.name}</p>
            <ul>
              <p className="accordSub">Experience:</p>
              <p className="contentrow">{props.experience}</p> 
            </ul>
            <ul>
              <p className="accordSub">Related Courses:</p>
              <p classNIame="contentrow">{props.courses}</p> 
            </ul>
            
           
          </div>
      
    );
  }


  return (
    <div id="home">
      <div className="App-aboutBG">
        <p className="App-aboutName">About Me</p>

        <content className="App-body">
          <p>My Name is Andrei Frunza.</p>
          
          <p>I am a graduate from Ryerson University, having recently completed my bachelors in Electrical Engineering.</p>
            
          
          <p>Throughout my time at Ryerson, I worked in the following languages,</p>
          
          <div className="App-links">
            <img onClick={handleJava} src={java} className="App-ImageR"/>
            <img onClick={handleC} src={C} className="App-ImageR"/>
            <img onClick={handleCplus} src={Cplus} className="App-ImageR"/>
            <img onClick={handleJs} src={JS} className="App-ImageR"/>

            {javaLang &&<Panel name="Java"
              experience="Created several projects over the course of the school semester, in order to develop an in-depth understanding of key concepts related to object-oriented
              engineering fundamentals."
              courses="Object Oriendted Programming."
            />
            }
              
            {cLang &&<Panel name="C"
              experience="Created Linux command shells capable of managing several processes at the same time, while communicating with each other. Created searching and
              sorting algorithms in order to learn fundamental programming concepts."
              courses="Data Structures and Algorithms, Operating Systems."
            />}
              
            {cplus &&<Panel name="C++"
              experience="Created a Web Server using an ESP8266 IoT device, with the ability to authenticate users and process JSON formatted HTTP requests. "
              courses="Engineering Capstone Design."
            />}
           
            {js &&<Panel name="JavaScript"
              experience="Used along with React-Native to design a fully funcitonal phone application that controls a wireless phone charger using HTTP requests,
              which runs on both iOS and Android. Used in tandem with React to create personal websites such as this one."
              courses="Engineering Capstone Design."
            />}
            
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