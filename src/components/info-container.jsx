import React, { Component } from 'react';
import Skills from './skills';
import Description from './description';


class InfoContainer extends Component {
  render(){
    return(
    <div className="info-image">
      <div className="container" id="info">
          <div className="flex-background">
            <Skills
             selected={this.props.selected}
             titles={this.props.titles}
             images={this.props.images}
             techs={this.props.techs}
             repos={this.props.repos}
             lives={this.props.lives}
            />
            <Description
             selected={this.props.selected}
             descs={this.props.descs}
            />
          </div>
        </div>
      </div>
      )
  }

}

export default InfoContainer;
