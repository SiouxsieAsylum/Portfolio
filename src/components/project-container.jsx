import React, { Component } from 'react';
import InfoContainer from './info-container'
import ThumbnailContainer from './thumbnail-container'
import Calc from '../images/calculator-thumbnail.png'
import Dance from '../images/dance-thumbnail.png'
import Diss from '../images/dissonance-thumbnail.png'
import Invoice from '../images/invoicer-screenshot.png'
import DT from '../images/landing-page.png'
import Wine from '../images/wine-thumbnail.png'
import Shoppr from '../images/shopping-list.png'



class ProjectContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      selected: null
    }

    this.titles = ["","Steven's Calculator","Bellydancing By Layla","Dissonance","DateTime","Reci-Pea 2.0","Wine By Dre","Invoicer"]
    this.projectImages = ["",Calc,Dance,Diss,DT,Shoppr,Wine,Invoice];
    this.technologies = ["","HTML,\nCSS,\nJS","HTML,\nCSS,\nJS","HTML,\nCSS,\nJS","Node.js,\nExpress.js,\nPostGresSQl,\nPassport(auth)","Node.js,\nExpress.js,\nPostGresSQl,\nPassport(auth),\nReact,\nGroup Git\n","React","\nNode.js,\nExpress.js,\nPostGresSQl,\nOauth2,\nNodemailer"];
    this.projectDescriptions=["","Steven Universe-themed calculator made with HTML, CSS, and Javascript. The design of the background is made with a series of ten parent and ten child divs to look like stripes and circles, and they travel with a keyframes animation. Fun pet project of mine.","Personal and professional website for the bellydancer Layla Mary. Designed as my final project for Per Scholas.","Game based upon the Stroop test. You click the left arrow if the color of the word matches what the word reads, and right if it doesn't. Just that simple? As the game progresses, the word can flip, the page can flip, the controls can flip... how long can you handle the dissonance? WARNING: FLASHING LIGHTS AND COLORS","Soon to fulfill its original destiny as an event planning app, DateTime is a bulletin board app that allows for users to create events and keep track of them by date, who hosted them, and whom was invited.","Recipe-to-shopping list app that gets random recipes from an outside api and adds to a client's shopping list. If the same recipe is added multiple times, the amounts accumulate. Group project that aimed to simulate contributing to an existing code base and Group Git in development.","Responsively designed mock wine-purchasing app built in React. Soon to feature local storage in order to replicate cart functionality. Feeds off an external api for the wines.","Email application that sends invoice information under template text to saved contacts. Login with Google, currently a emails sent from hard-coded address."]

    this.gitHubRepos = ["","https://github.com/SiouxsieAsylum/StevenUniverseCalculator","https://github.com/SiouxsieAsylum/Bellydancing-By-Layla","https://github.com/SiouxsieAsylum/Dissonance","https://github.com/SiouxsieAsylum/datetime","https://git.generalassemb.ly/sjciasullo/project3-recipe-shopper","https://github.com/SiouxsieAsylum/Wine-By-Dre","https://github.com/SiouxsieAsylum/Invoicer"];
    this.liveLinks = ["","http://we-are-the-crystal-gems.bitballoon.com/","https://siouxsieasylum.github.io/Bellydance-By-Layla/#close","https://siouxsieasylum.github.io/Dissonance/","http://date-time.herokuapp.com/","https://reci-pea-shopper.herokuapp.com/","https://siouxsieasylum.github.io/Wine-By-Dre/","https://template-mailer-oauth2.herokuapp.com/"];
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
      <div className="container" id="projects">
        <InfoContainer
          selected={this.state.selected}
          titles={this.titles}
          images={this.projectImages}
          techs={this.technologies}
          descs={this.projectDescriptions}
          repos={this.gitHubRepos}
          lives={this.liveLinks}
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

export default ProjectContainer;
