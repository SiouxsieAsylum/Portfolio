import React, { Component } from 'react';
import InfoContainer from './components/info-container'
import ThumbnailContainer from './components/thumbnail-container'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selected: null
    }
    this.projectImages = [];
    this.projectDescriptions = [];
    this.gitHubRepos = [];
    this.liveLinks = []
  }



  render() {
    return (
      <div className="App">
        <InfoContainer />
        <ThumbnailContainer />
      </div>
    );
  }
}

export default App;
