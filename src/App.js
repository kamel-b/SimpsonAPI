import React, { Component } from 'react';
import GenerateQuote from './GenerateQuote';
import logo from './logo.svg';
import './App.css';

import DisplayQuotes from './DisplayQuote';

const charac = {
  character:'Nelson Muntz',
  quote:"Shoplifting is a victimless crime, like punching someone in the dark.",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
}

class App extends Component {

  state ={
    quote: charac
  };

  getQuote() {
       fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
         .then(response => response.json())
         .then(data => {
           console.log(data[0])
           this.setState({ quote: data[0]});
         });
  }

  render() {
          

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <GenerateQuote selectQuote ={() => this.getQuote()}/>
        <DisplayQuotes quote ={this.state.quote}/>
      </div>
    );
  }
}

export default App;
