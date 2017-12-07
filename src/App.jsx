import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Nav from './components/nav'
import About from './components/about'
import ContactMe from './components/contactme'
import ProjectContainer from './components/project-container'

import './reset.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)

    this.state={
      view: "landing"
    }
  }

  // write function to change state based upon what button gets clicked and pass to Nav
  // how to only give nav a class based on what page it's on?
  // http://brewhouse.io/blog/2015/03/24/best-practices-for-component-state-in-reactjs.html

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" render={() => {
            return(<h1>Hi</h1>)
          }} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={ProjectContainer} />
          <Route exact path="/contact-me" component={ContactMe} />
        </div>
      </Router>
    );
  }
}

export default App;
