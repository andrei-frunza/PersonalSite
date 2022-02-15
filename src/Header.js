import React from 'react';
import './App.css';
import linked_img from './assets/linkedin.png';
import git_img from './assets/GitHub.png';

function Header(){
    return(
    <header className="App-header">
          <a href="#top" className="App-nameBox">Andrei Frunza</a>
        <contact className="App-contact">
          <p className="App-headText">Contact Information</p>
            (647) 993-6179<brk/>
            andreifrunza.work@gmail.com<brk/>
          <links className= "App-links">
            <a href="https://www.linkedin.com/in/frunza-andrei">
              <img 
                className= "App-linked"
                src = {linked_img}
                />
            </a>
            <a href="https://github.com/andrei-frunza">
              <img  
                className= "App-linked"
                src= {git_img}
                />
            </a>
          </links>
        </contact>
      </header>
    );
}
export default Header;