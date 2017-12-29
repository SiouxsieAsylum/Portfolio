import React, {Component} from 'react';

class Description extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="description">
        <p>{this.props.descs[this.props.selected]}</p>
      </div>
      )
  }
}

export default Description;
