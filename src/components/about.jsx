import React, { Component } from 'react';


const splitScreen = () => {
  return(<div className="split-screen">
      <div className="" id="left">
        <div className="layer top">
          <div className="content-wrap">
            <div className="content-body">
              <div className="full-stack">full stack</div>
              <div className="api">api here</div>
              <div className="front-end-dev">front end logo here</div>
              <div className="ux">ux logo here</div>
              <div className="React">react logo here</div>
            </div>
          </div>
        </div>
      </div>
      <div className id="right">
        <div className="layer bottom">
          <div className="content-wrap">
            <div className="content-body">
              <div className="full-stack">full stack</div>
              <div className="api">api here{}</div>
              <div className="front-end-dev">front end logo here</ ></div>
              <div className="ux">ux logo here</div>
              <div className="React">react logo here</div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}


class About extends Component{
  render(){
    return(
        <div className="container" id="about">

        </div>
      )
  }
}

export default About;
