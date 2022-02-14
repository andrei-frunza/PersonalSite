import {React, useState} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import linked_img from './assets/linkedin.png';
import git_img from './assets/GitHub.png';
import { getValue } from '@testing-library/user-event/dist/utils';

function Start() {
    

    let navigate=useNavigate();

    function Go(){
        navigate("/home");
    }

  return (
    //Setting a video background

    /*as of right now they all go to the same route*/
    <div className="App">
        <div className="Start">
                
                    <PageList></PageList>
                

                <links className= "App-links">
                    <a href="https://www.linkedin.com/in/frunza-andrei">
                        <img 
                            className= "App-startLinks"
                            src = {linked_img}
                            />
                    </a>
                    <a href="https://github.com/andrei-frunza">
                        <img  
                            className= "App-startLinks"
                            src= {git_img}
                            />
                    </a>
                </links>




            </div>
           
    </div>
  );
}
export default Start;

function PageList(){

    const[open,setOpen] = useState(false);

    return(
            <div className="App-spaceHold">
                <a href="#" className="App-frontLink" onClick={()=>setOpen(!open)}>
                     <text className="App-startName">Andrei Frunza</text>
                </a>

              
            <CSSTransition in={open} timeout={1000} classNames="my-node" unmountOnExit={true}>
            <div className="App-links">
                    <a href="/home" className= "App-startHeader">About</a>
                    <a href="/home" className= "App-startHeader">Projects</a>
                    <a href="/home" className= "App-startHeader">Resume</a>
                    <a href="/home" className= "App-startHeader">Contact Me</a>
            </div>
            </CSSTransition>
            
            </div>
    );
    
}