import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class Nav extends Component{
  constructor(props){
    super(props)

    this.state={
      hovered:'',
      exposed:'',
      hidden:''
    }
    this.hoverExpose = this.hoverExpose.bind(this)
    this.noHoverExpose = this.noHoverExpose.bind(this)
  }

  hoverExpose = (e) => {
    // this.socialList.className = "hovered"
    this.setState({
      hovered:'hovered',
      exposed:'exposed',
      hidden:'hidden'
    })
  }

    noHoverExpose = (e) => {
    this.setState({
      hovered:'',
      exposed:'',
      hidden:''
    })
  }

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
        {/*<Link to="#contact-me">*/}

        {/*</Link>*/}
        {/*<div id="">*/}
        <ul
          className={this.state.hovered? ['social-media',this.state.hovered].join(' ') : 'social-media' }
          ref={socialList => this.socialList = socialList}

          onMouseEnter={e => this.hoverExpose(e)}
          onMouseLeave={e => this.noHoverExpose(e)}>
          <div className={this.state.hidden ? this.state.hidden : ''} id="picture"></div>
          <p className={this.state.hidden ? this.state.hidden : ''}>Come Find Me</p>
          <li className={this.state.exposed ? 'list exposed' : 'list'} id="phone">
            <div className="drop-icon" id="phone-icon"></div>
            <a>917 674 6154</a>
          </li>

          <li className={this.state.exposed ? 'list exposed' : 'list'} id="skype">
            <div className="drop-icon" id="skype-icon"></div>
            <a>andrea-michelle-mckenzie</a>
          </li>
          <li className={this.state.exposed ? 'list exposed' : 'list'} id="github"><div className="drop-icon" id="git-icon"></div>
            <a href="https://github.com/SiouxsieAsylum" target="_blank"  rel="noopener noreferrer" >SiouxsieAsylum</a>
            </li>
          <li className={this.state.exposed ? 'list exposed' : 'list'} id="linkedin">
            <div className="drop-icon" id="linked-icon"></div>
            <a href="https://www.linkedin.com/in/andrea-mckenzie" target="_blank"  rel="noopener noreferrer" >in/andrea-mckenzie</a>
          </li>
          <li className={this.state.exposed ? 'list exposed' : 'list'} id="gmail">
            <div className="drop-icon" id="gmail-icon"></div>
            <a href="mailto:mckenzie.andrea.m@gmail.com?subject=Hey, Dre, let's make magic!" target="_blank"  rel="noopener noreferrer" >mckenzie.andrea.m@gmail.com</a>
          </li>
        </ul>
        <p>{/*Come Find Me*/}</p>
        {/*</div>*/}
        </div>

      )
  }
}

export default Nav;
