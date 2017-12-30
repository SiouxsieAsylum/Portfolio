import React, {Component} from 'react';

class Description extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="description">
        <div className="desc-picture">
          <p>{this.props.descs[this.props.selected]}</p>
        </div>
      </div>
      )
  }
}

export default Description;
