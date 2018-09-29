import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Description extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="description">
        <div className="desc-picture">
        <ReactCSSTransitionGroup
          transitionName="description"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <p>{this.props.selected ? this.props.descs[this.props.selected] : "Click a thumbnail to see a description of each project. " }</p>
        </ReactCSSTransitionGroup>
        </div>
      </div>
      )
  }
}

export default Description;
