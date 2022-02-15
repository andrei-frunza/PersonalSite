import React from 'react';
import './App.css';
import linked_img from './assets/linkedin.png';
import git_img from './assets/GitHub.png';

function Home() {
  return (
    <div className="App" id="home">
      <div className="App-animation">
      
      <div className="App-aboutBG">
        <p className="App-aboutName">About Me</p>
      <AboutContains>
        <Panel name="Education">
          
        </Panel>
        <Panel name="Skills">
          
        </Panel>
        <Panel name="Experience">
         
        </Panel>
      </AboutContains>
 
      </div>
      </div>
      
    </div>
  );
}

export default Home;

function AboutContains(props){
  return(
    <about>
      <ul className="App-body">{props.children}</ul>
    </about>
  );
}

function Panel(props){
  return(
    <about>
      <ul className="App-about">
        <div className="App-panelHead">
        <p className="App-bodyHeader">{props.name}</p>
        </div>
        <ul>{props.children}</ul>
        
      </ul>
    </about>
  );
}

function Point(props){
  return(
      
        <div>
          <p className="App-bodyTitle">{props.title}</p>
          <p className="App-bodysubTitle">{props.subtitle}</p>
          <p className="App-bodysubTitle">{props.years}</p>
        </div>
        
      
  )
}