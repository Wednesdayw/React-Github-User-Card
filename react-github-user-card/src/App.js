import React from "react";
import logo from "../src/githublogo.png";
import "./App.css";
import CardForUser from './components/CardForUser';
import CardForFollowers from './components/CardForFollowers';

class App extends React.Component {
  constructor() {
    console.log('constructor');
    super();
  this.state = {
    user: [],
    followers: []
  };
  }
  // use fetch to get users data
  componentDidMount() {
    console.log("CDM");
    fetch("https://api.github.com/users/Wednesdayw")
      .then(response => response.json())
      .then(response => this.setState({ user: response }))
      .catch(err => console.log("error"));

    // use fetch to get followers data
    fetch("https://api.github.com/users/Wednesdayw/followers")
      .then(response => response.json())
      .then(response => this.setState({ followers: response }))
      .catch(err => console.log("error"));
  }
  render() {
    console.log("rendering");
    return (
      <div>
        <header className="App-header">
                   <img src={logo} className="App-logo" alt="logo" />
                   <h1>React Github User Cards</h1>
                   </header>

<div className='container'>
        <CardForUser user={this.state.user} />
        <CardForFollowers followers={this.state.followers} />
      </div>
      </div>
    );
  }
}

export default App;