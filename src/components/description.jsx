import React, { Component } from 'react';

class Description extends Component {
  constructor(props){
    super(props)

    this.defaultDescription = "New York born and bred, I'm a designer at heart and a problem-solver to a fault. A graduate of CUNY Hunter College, I'm self-taught with Ruby and Java and underwent the Per Scholas #Codebridge program to then enter the Web Development Immersive at General Assembly to learn PostGresSQL, Node.js, and React."
  }

  render(){
    return(
      <div className="description">
      <div>
        <h2>{this.props.selected ? this.props.titles[this.props.selected] : "Nice to E-Meet you!"}</h2>
        <p className="desc">{this.props.selected ? this.props.descs[this.props.selected] : this.defaultDescription}</p>
        <p className="tech">{this.props.selected ? this.props.techs[this.props.selected] : ""}</p>
      </div>


        <div className="desc-button-container">
          <a href={this.props.selected ? this.props.repos[this.props.selected] : "https://github.com/SiouxsieAsylum"}><button className="git-hub-button">Github</button></a>
          <a><button className="live-site-button">Live</button></a>
        </div>
      </div>
      )
  }

}

export default Description;

