import React, {Component} from 'react';

class Description extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="description">
        <div className="desc-picture">
          <p>{this.props.selected ? this.props.descs[this.props.selected] : "Click a thumbnail to see a description of each project. " }</p>
        </div>
      </div>
      )
  }
}

export default Description;
