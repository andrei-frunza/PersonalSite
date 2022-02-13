import React from 'react';
import './App.css';

import Andrei_img from './assets/andrei.jpg';
import linked_img from './assets/linkedin.png';
import git_img from './assets/GitHub.png';

function Home() {
  return (
    <div className="App">
      <div className="App-animation">
      <header className="App-header">
          <a href="/" className="App-nameBox">Andrei Frunza</a>
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
      <AboutContains>
        <Panel name="Education"/>
        <Panel name="Skils"/>
        <Panel name="Experience"/>
      </AboutContains>
 
      </div>
    </div>
  );
}

export default Home;

/*THE OLD BODY
<body className="App-body">
        <about className= "App-about">
          <p className="App-bodyHeader">About Me</p>
          <p className= "App-aboutBody">
            <text>
            Melville Fuller (February 11, 1833 – July 4, 1910) was the eighth chief justice of the United States. Born in Augusta, Maine, he graduated from Bowdoin College and practiced law in Chicago. In 1888, President Grover Cleveland appointed him to the Supreme Court. Fuller gained a reputation for collegiality and competent administrative skills. His jurisprudence was staunchly conservative: he favored free enterprise and opposed broad federal power. Fuller wrote the majority opinion in Pollock v. Farmers' Loan & Trust Co., which held that the federal income tax was unconstitutional. He joined the majority opinion in Plessy v. Ferguson, which upheld state-mandated racial segregation, and in Lochner v. New York, which struck down economic regulations on the grounds that they violated the freedom of contract. Many of his decisions were later overruled, and the majority of scholars have been critical of the Fuller Court's jurisprudence.
            </text>
            <img className="App-photo" src={Andrei_img}/>
          </p>
        </about>
      </body>
      */
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
      </ul>
    </about>
  );
}