import React,{Component} from 'react';
import {BrowserRouter,Route,Routes, useLocation} from 'react-router-dom';

import Home from './Home.js';
import {Start,pageList} from './Start.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
 
class App extends Component {
  render() {
    return (      
      <BrowserRouter>
        <div>
              <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/" element={<Start/>}/>
              </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;