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
          <Point title="School of Hard Knocks" years="2016-2022" subtitle="the Streets"></Point>
          <Point title="High School Diploma" years="2012-2016" subtitle="Richmond Hill High School"/>
        </Panel>
        <Panel name="Skils">
          
        </Panel>
        <Panel name="Experience">
          <Point title="Line Cook" years="2019-2022" subtitle="FAB Restaurant Concepts"/>
          <Point title="Sweet Baby Boy" years="1998-2022" subtitle="Everywhere All the Time"/>
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