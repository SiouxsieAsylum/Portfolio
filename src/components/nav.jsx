import React, {Component} from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';


class Nav extends Component{
  render(){
    return(

        <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/projects">
          <h1>Projects</h1>
        </Link>
        <Link to="/about">
          <h1>Get To Know Me</h1>
        </Link>
        <Link to="/contact-me">
          <h1>Come Find Me</h1>
        </Link>
        </div>

      )
  }
}

export default Nav;
