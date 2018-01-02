import React, { Component } from 'react';
import Youtube from 'react-youtube';
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
  constructor(props){
    super(props)

    this.state = {
      video: "lnY4dYpDqUg"
    }

    this.vids = ["2fcj8PiiyoY","WLFd6xaRLN0","Bq6IuZIJhuI","Sxks3Z6QByc","KO_3Qgib6RQ","jx96Twg-Aew","vHU6ZRQJ50Q","sEhy-RXkNo0","NacorzSwf0M","LPFgBCUBMYk","HQp8QssTR3Q","IwEgUKMRX5w","8sgycukafqQ","YD8mZmGSDNc","LlU4FuIJT2k"]
    this.onReadyMuter = this.onReadyMuter.bind(this)
    this.changeVid = this.changeVid.bind(this)

  }


  changeVid(e){
    console.log('I am called')
    let rand = Math.floor(Math.random() * this.vids.length)
    this.setState({
      video: this.vids[rand]
    })
    console.log(this.state.video)
  }

  onReadyMuter(e){
    e.target.mute()
  }



  render(){
    const options = {
      height: '169',
      width: '300',
      playerVars:{
        autoplay: 1,
        loop: 1
      }
    }

    return(
        <div className="container" id="about">
          <div className="flex-on-me">
            <div className="my-intro">
              <p><span>Hello, my name is Andrea McKenzie.</span> I'm a creative soul with a passion for development. I believe in delivering structured data and an intuitive user interface wrapped up in a beautifully designed package. Want to work together? <a href="mailto:mckenzie.andrea.m@gmail.com">Let's make magic.</a></p>
            </div>


            <div className="youtube">
            <h6>Listen With Me</h6>
            <Youtube
              videoId={this.state.video}
              opts={options}
              onReady={this.onReadyMuter}
              onEnd={this.changeVid}
              id="youtube-vid"
            />
            </div>
          </div>
          <SplitScreen />
        </div>
      )
  }
}

export default About;
