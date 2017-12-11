import React, { Component } from 'react';
import InfoContainer from './info-container'
import ThumbnailContainer from './thumbnail-container'
// import logo from './logo.svg';



class ProjectContainer extends Component {
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
      <div className="project-container">
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

export default ProjectContainer;
