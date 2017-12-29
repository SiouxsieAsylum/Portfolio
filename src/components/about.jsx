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
                <p>Full-Stack Development</p>
                </div>

                <div className="content">
                <div className="icon api"></div>
                <p>APIs, data structures, and database management</p>
                </div>

                <div className="content">
                <div className="icon front-end"></div>
                <p>Beautiful, interactive front-ends</p>
                </div>

                <div className="content">
                <div className="icon ux"></div>
                <p>User interactivity and design</p>
                </div>

                <div className="content">
                <div className="icon react"></div>
                <p>Stateful React applications</p>
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
                <p>Full-Stack Development</p>
                </div>

                <div className="content">
                <div className="icon api"></div>
                <p>APIs, data structures, and database management</p>
                </div>

                <div className="content">
                <div className="icon front-end"></div>
                <p>Beautiful, interactive front-ends</p>
                </div>

                <div className="content">
                <div className="icon ux"></div>
                <p>User interactivity and design</p>
                </div>

                <div className="content">
                <div className="icon react"></div>
                <p>Stateful React applications</p>
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
          <div className="flex-on-me">
            <div className="my-intro">
              <p><span>Hello, my name is Andrea McKenzie.</span> I'm a creative soul with a passion for development. I believe in delivering structured data and an intuitive user interface wrapped up in a beautifully designed package. Want to work together? <a href="mailto:mckenzie.andrea.m@gmail.com">Let's make magic.</a></p>
            </div>

            <div className="youtube">
          {/*make a playlist (array of url suffixes)*/}
          {/*translucent, autoplay on mute. mouseover, sound and opacity, mouseover again, no sound or opacity. */}
        {/*2fcj8PiiyoY,WLFd6xaRLN0,Bq6IuZIJhuI,Sxks3Z6QByc,KO_3Qgib6RQ,jx96Twg-Aew,vHU6ZRQJ50Q,sEhy-RXkNo0,NacorzSwf0M,LPFgBCUBMYk,HQp8QssTR3Q,IwEgUKMRX5w,8sgycukafqQ,YD8mZmGSDNc,NWWeQlXfSa0 */}
            <h6>Listen With Me</h6>
            <iframe width="300" height="169" src="https://www.youtube.com/embed/lnY4dYpDqUg" frameborder="0" gesture="media" allow="encrypted-media"></iframe>
            </div>
          </div>
          <SplitScreen />
        </div>
      )
  }
}

export default About;
