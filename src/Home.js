import React, {useState} from 'react';
import './App.css';
import './assets/andrei.jpg';
import java from './assets/java.png';
import C from './assets/C.png';
import Cplus from './assets/C++.png';
import JS from './assets/JS.png';
import Matlab from './assets/matlab.png';
import etap from './assets/etap.svg';
import multi from './assets/MultiSim.png';



function Home() {
  const [javaLang, setJava] = useState(false);
  const [cLang, setC] = useState(false);
  const [cplus, setCplus] = useState(false);
  const [js, setJs] = useState(false);

  const [mat, setMat] = useState(false);
  const [et, setEt] = useState(false);
  const [mt, setMt] = useState(false);

  const handleJava = () =>{
    setC(false);
    setCplus(false);
    setJs(false);
    setJava(!javaLang);
    setMat(false);
    setMt(false);
    setEt(false);
  }
  const handleC = () =>{
    setC(!cLang);
    setCplus(false);
    setJs(false);
    setJava(false);
    setMat(false);
    setMt(false);
    setEt(false);
  }
  const handleCplus = () =>{
    setC(false);
    setCplus(!cplus);
    setJs(false);
    setJava(false);
    setMat(false);
    setMt(false);
    setEt(false);
  }
  const handleJs = () =>{
    setC(false);
    setCplus(false);
    setJava(false);
    setJs(!js);
    setMat(false);
    setMt(false);
    setEt(false);
    
    
  }

  const handleMat = () =>{
    setMat(!mat);
    setMt(false);
    setEt(false);
    setC(false);
    setCplus(false);
    setJs(false);
    setJava(false);
  }
  const handleMt = () =>{
    setMt(!mt);
    setMat(false);
    setEt(false);
    setC(false);
    setCplus(false);
    setJs(false);
    setJava(false);
  }
  const handleEt = () =>{
    setEt(!et);
    setMt(false);
    setMat(false);
    setC(false);
    setCplus(false);
    setJs(false);
    setJava(false);
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
            
              <a className="accordProject">Related Projects</a>
            
          </div>
      
    );
  }


  return (
    <div id="home">
      <div className="App-aboutBG">
        <p className="App-aboutName">About Me</p>

        <content className="App-body">
          <p>My Name is Andrei Frunza.</p>
          
          <p>I am a graduate from Toronto Metropolitan University, having recently completed my bachelors in Electrical Engineering.</p>
            
          
          <p>Throughout my time at Toronto Metropolitan, I worked in the following languages</p>
          
          <div className="App-links">
            <img onClick={handleJava} src={java} className="App-ImageR"/>
            <img onClick={handleC} src={C} className="App-ImageR"/>
            <img onClick={handleCplus} src={Cplus} className="App-ImageR"/>
            <img onClick={handleJs} src={JS} className="App-ImageR"/>

            {javaLang &&<Panel name= "Java"
              experience="Developed the front and back end of a banking application, capable of user authentication, account generation and deletion. Data was saved in a .txt
              file which was then parsed on repeated uses."
              courses="Object Oriented Programming."
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
            <img src={Matlab} onClick={handleMat} className="App-ImageR"/>
            <img src={etap} onClick={handleEt} className="App-ImageR"/>
            <img src={multi} onClick={handleMt} className="App-ImageR"/>
          </div>
          {mat &&<Panel name="Matlab Simulink"
              experience="Implemented in the design and testing of PID controllers. Used to create digital models for practical AC and DC motors, model motion of an
              electric vehicle, model generators for wind turbines connected to the power grid, and more."
              courses="Control Systems, Power Systems, Electric Machines, Alternative Energy Systems."
            />
            }
              
            {et &&<Panel name="ETAP"
              experience="Used to create single line diagrams of electrical systems, investigate transient stability, and design system protection components. "
              courses="Power Systems, Power Systems Protection Control."
            />}
              
            {mt &&<Panel name="MultiSim"
              experience="Used to create electrical circuits, exploring the use of operational amplifiers, transistors, and circuit design fundamentals."
              courses="Electric Circuit Analysis, Electronic Circuits."
            />}

        </content>
 
      </div>
      
      
    </div>
  );
}

export default Home;