import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

import Nav from './components/nav'
import About from './components/about'
import Footer from './components/footer'
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
            return(<div id="background">
                  <h1 id="landing-words">Let's Make Magic.</h1>
                    <div id="overlay"></div>
                    <div id="landing-bar">
                      <Link id="link" to="/#about">
                        <button id="enter">Meet Andrea McKenzie</button>
                      </Link>
                    </div>
                  </div>)
          }} />
          <Route exact path="/#about" component={About} />
          <Route exact path="/#projects" component={ProjectContainer} />
          <Route exact path="/#contact-me" component={ContactMe} />
          <About />
          <ProjectContainer />
          <ContactMe />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
