import React, { Component } from 'react';
import Description from './description'

class InfoContainer extends Component {
  render(){
    return(
    <div className="info-image">
      <div className="container" id="info">
        <div className="name-and-contacts">
          <h1>Andrea McKenzie</h1>
          <div className="contacts">
          <div className="button-container">
            <a href="https://github.com/SiouxsieAsylum"><div className="button" id="GitHub"></div></a>
            <a href="https://www.linkedin.com/in/andrea-mckenzie"><div className="button" id="LinkedIn"></div></a>
            <a href="mailto:mckenzie.andrea.m@gmail.com"><div className="button" id="Gmail"></div></a>
          </div>
            <div id="phone-number"><div className="button" id="Phone"></div><h6>917-674-6154</h6></div>
            <div id="skype"><div className="button" id="Skype-icon"></div><h6>andrea-michelle-mckenzie</h6></div>
          </div>
          <div className="flex-background">
            <Description
             selected={this.props.selected}
             titles={this.props.titles}
             images={this.props.images}
             techs={this.props.techs}
             descs={this.props.descs}
             repos={this.props.repos}
            />
          </div>
        </div>
      </div>
    </div>
      )
  }

}

export default InfoContainer;
