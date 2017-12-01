import React, { Component } from 'react';

class Thumbnail extends Component {
  render(){
    return(

        <div onClick={() => this.props.selectProject(this.props.index)} className="thumbnail-body">
          <div className="image" style={{backgroundImage: `url(${this.props.image})`}}>
            <div className="thumbnail-inner">
              <div className="title"><h6>{this.props.title}</h6></div>
            </div>
          </div>

        </div>


      )
  }
}

export default Thumbnail;
