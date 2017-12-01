import React, { Component } from 'react';
import InfoContainer from './components/info-container'
import ThumbnailContainer from './components/thumbnail-container'
// import logo from './logo.svg';
import './reset.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selected: null
    }
    // if selected = number, populate description, live, and github links with that numbers prop info
    // on hover, get index and set background to that image
    // if selected = null, description is my bio, live link is linkedin and github link is my github
    this.titles = ["","Steven's Calculator","Bellydancing By Layla","Dissonance","DateTime","Reci-Pea 2.0","Wine By Dre"]
    this.projectImages = ["",'/images/calculator-thumbnail.png','/images/dance-thumbnail.png','/images/dissonance-thumbnail.png','/images/landing-page.png','/images/shopping-list.png','/images/wine-thumbnail.png'];
    this.technologies = ["","HTML,\nCSS,\nJS","HTML,\nCSS,\nJS","HTML,\nCSS,\nJS","Node.js,\nExpress.js,\nPostGresSQl,\nPassport(auth)","Node.js,\nExpress.js,\nPostGresSQl,\nPassport(auth),\nReact,\nGroup Git\n","React"];
    this.projectDescriptions = ["","Functioning calculator made with HTML, CSS, and Javascript. The design of the background is made with a series of ten parent and ten child divs to look like stripes and circles, and they travel with a keyframes animation. Fun pet project of mine.","Personal and professional website for the bellydancer Layla Mary. Designed as my final project for Per Scholas. Currently not live.","Game based upon the Stroop test. You click the left arrow if the color of the word matches what the word reads, and right if it doesn't. Just that simple? As the game progresses, the word can flip, the page can flip, the controls can flip... how long can you handle the dissonance? WARNING: FLASHING LIGHTS AND COLORS","Soon to fulfill its original destiny as an event planning app, DateTime is a bulletin board app that allows for users to create events and keep track of them by date, who hosted them, and whom was invited.","Recipe-to-shopping list app that gets random recipes from an outside api and, upon client-or registered user-selection. If the same recipe is added multiple times, the amounts accumulate. This was a group project that was both a great experience in learning how to create an API and manipulate highly structured data, but also in what teamwork and Group Git looks like in the development feild. Currently not live","Responsively designed mock wine-purchasing app built in React. Soon to feature local storage in order to replicate cart functionality. Feeds off an external api for the wines."];
    this.gitHubRepos = ["","https://github.com/SiouxsieAsylum/StevenUniverseCalculator","https://github.com/SiouxsieAsylum/Bellydancing-By-Layla","https://github.com/SiouxsieAsylum/Dissonance","https://github.com/SiouxsieAsylum/datetime","https://git.generalassemb.ly/sjciasullo/project3-recipe-shopper","https://github.com/SiouxsieAsylum/Wine-By-Dre"];
    this.liveLinks = ["","","","","","",""];
    this.selectProject = this.selectProject.bind(this);
    this.deSelectProject = this.deSelectProject.bind(this);
  }

  selectProject(key){
    this.setState({
      selected: key
    })
  }

  deSelectProject(key){
    this.setState({
      selected: null
    })
  }

  render() {
    return (
      <div className="App">
        <InfoContainer
          selected={this.state.selected}
          titles={this.titles}
          images={this.projectImages}
          techs={this.technologies}
          descs={this.projectDescriptions}
          repos={this.gitHubRepos}
         />
        <ThumbnailContainer
          selected={this.state.selected}
          titles={this.titles}
          images={this.projectImages}
          techs={this.technologies}
          descs={this.projectDescriptions}
          repos={this.gitHubRepos}
          selectProject={this.selectProject}
          deSelectProject={this.deSelectProject}
         />
      </div>
    );
  }
}

export default App;
