import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class Nav extends Component{
  render(){
    return(

        <div className="nav">
        <Link to="#">
          <p>Home</p>
        </Link>
        <Link to="#projects">
          <p>Projects</p>
        </Link>
        <Link to="#about">
          <p>Get To Know Me</p>
        </Link>
        <Link to="#contact-me">
          <p>Come Find Me</p>
        </Link>
        </div>

      )
  }
}

export default Nav;
