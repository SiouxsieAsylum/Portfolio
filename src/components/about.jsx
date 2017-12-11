import React, { Component } from 'react';
import '../about.css';


const SplitScreen = () => {
  return(
    <div className="split-screen">

        <div className="layer top">
          <div className="content-wrap">
            <div className="content-body">
              <div className="content-flex">

                <div className="content">
                <div className="icon full-stack"></div>
                <p>full stack</p>
                </div>

                <div className="content">
                <div className="icon api"></div>
                <p>api here</p>
                </div>

                <div className="content">
                <div className="icon front-end"></div>
                <p>front end logo here</p>
                </div>

                <div className="content">
                <div className="icon ux"></div>
                <p>ux logo here</p>
                </div>

                <div className="content">
                <div className="icon react"></div>
                <p>react logo here</p>
                </div>

              </div>
            </div>
          </div>
        </div>

      <div className id="right">
        <div className="layer bottom">
          <div className="content-wrap">
            <div className="content-body">
               <div className="content-flex">

                <div className="content">
                <div className="icon full-stack"></div>
                <p>full stack</p>
                </div>

                <div className="content">
                <div className="icon api"></div>
                <p>api here</p>
                </div>

                <div className="content">
                <div className="icon front-end"></div>
                <p>front end logo here</p>
                </div>

                <div className="content">
                <div className="icon ux"></div>
                <p>ux logo here</p>
                </div>

                <div className="content">
                <div className="icon react"></div>
                <p>react logo here</p>
                </div>

                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    )
}


class About extends Component{
  render(){
    return(
        <div className="container" id="about">

          <div className="my-intro">
          <p><span>Hello, my name is Andrea McKenzie.</span> I'm a creative soul with a passion for development. I believe in delivering structured data and an intuitive user interface wrapped up in a beautifully designed package. Want to work together? <a href="mailto:mckenzie.andrea.m@gmail.com">Let's make magic.</a></p></div>
          <SplitScreen />
        </div>
      )
  }
}

export default About;
