import React, { Component } from 'react';
import Description from './description';

class InfoContainer extends Component {
  render(){
    return(
    <div className="info-image">
      <div className="container" id="info">
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
      )
  }

}

export default InfoContainer;
