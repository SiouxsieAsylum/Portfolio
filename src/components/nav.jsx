import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class Nav extends Component{
  constructor(props){
    super(props)

    this.state={
      hovered:'',
      exposed:''
    }
    this.hoverExpose = this.hoverExpose.bind(this)
    this.noHoverExpose = this.noHoverExpose.bind(this)
  }

  // componentDidMount(){
  //   this.socialList.addEventListener('mouseenter',this.onMouseEnter);
  //   this.socialList.addEventListener('mouseleave',this.onMouseLeave);
  // }

  hoverExpose = (e) => {
    // this.socialList.className = "hovered"
    this.setState({
      hovered:'hovered',
      exposed:'exposed'
    })
  }

    noHoverExpose = (e) => {
    this.setState({
      hovered:'',
      exposed:''
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
        {/*<Link to="#contact-me">
          <p>Come Find Me</p>
        </Link>*/}
        <ul
          className={['social-media',this.state.hovered].join(' ')}
          ref={socialList => this.socialList = socialList}

          onMouseEnter={e => this.hoverExpose(e)}
          onMouseLeave={e => this.noHoverExpose(e)}
          >
         {/* <li className={["list", this.state.exposed ? 'exposed' : ""].join(' ')} id="phone">1</li>
          <li className={["list", this.state.exposed ? 'exposed' : ""].join(' ')} id="skype">2</li>
          <li className={["list", this.state.exposed ? 'exposed' : ""].join(' ')} id="github">3</li>
          <li className={["list", this.state.exposed ? 'exposed' : ""].join(' ')} id="linkedin">4</li>
          <li className={["list", this.state.exposed ? 'exposed' : ""].join(' ')} id="gmail">5</li>*/}
        </ul>

        </div>

      )
  }
}

export default Nav;
