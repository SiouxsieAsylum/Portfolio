import React, { Component } from 'react';
import Thumbnail from './thumbnail'

function ThumbNailGenerator(props){
  const titles = props.titles
  const thumbnails = titles.map((title,i) => {
      // console.log("thing")
      if (i + 1 < titles.length){
        return(<Thumbnail
          key={i}
          index={i + 1}
          title={titles[i + 1]}
          image={props.images[i + 1]}
          selectProject={props.selectProject}
          deSelectProject={props.deSelectProject}
        />)
        }
      })
  return(
    <div className="thumbnail-collection">
      {thumbnails}
    </div>
    )
}

class ThumbnailContainer extends Component {
  constructor(props){
    super(props)
  }

  render(){

      return(
        <div id="thumbnail">
        <ThumbNailGenerator
          titles={this.props.titles}
          images={this.props.images}
          selectProject={this.props.selectProject}
          deSelectProject={this.props.deSelectProject}
        />
        </div>
    )


  }

}



export default ThumbnailContainer;
