import React, { Component } from 'react';

const skill = () => {

}

class Description extends Component {
  constructor(props){
    super(props)

    this.defaultDescription = "Select a project to see my skills."
  }

  render(){
    return(
      <div className="description">
      <div>
        <h2>{this.props.selected ? this.props.titles[this.props.selected] : "Nice to E-Meet you!"}</h2>
        <p className="desc">{this.props.selected ? "" : this.defaultDescription}</p>
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
//description will appear in the
