import React,{Component} from 'react';

import Home from './Home.js';
import Start from './Start.js';
import Header from'./Header.js';
 
class App extends Component {
  render() {
    return (      /* NOT USING THIS ANYMORE
      <BrowserRouter>
        <div>
              <Routes>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/" element={<Start/>}/>
              </Routes>
        </div> 
      </BrowserRouter>*/
      <div className="App">
      <div className="App-bg">
      <Start/>
      <Home/>
      <Header/>
      </div>
      </div>
    );
  }
}
 
export default App;