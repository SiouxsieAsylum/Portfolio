import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import ProjectContainer from './components/project-container'
import Nav from './components/nav'

import './reset.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={ProjectContainer} />
          <Route path="/contact-me" component={ContactMe} />
            <h1>Hi</h1>
        </div>
      </Router>
    );
  }
}

export default App;
