import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomQuote: ""
    }

    this.ask = this.ask.bind(this);
  }

  ask() {
    this.setState({
      randomQuote: Math.floor(Math.random() * 6) + 1 
    });
  }

  render() {

    const quotes = ["There will be a day when I no longer can do this. THAT DAY IS NOT TODAY.",
    "Your friends should motivate and inspire you. Your circle should be well rounded and supportive. Keep it tight. Quality over quantity, always.",
    "Don’t make change too complicated. Just begin.",
    "YOU are the creator of your own destiny.",
    "This is the start of something beautiful.",
    "Don’t let small minds convince you that your dreams are too big.",
  "The temptation to quit will be greatest just before you are about to succeed."];
    const genQuote = quotes[this.state.randomQuote];

    return (
      <div className="container">
      <h1>Motivational Quotes</h1>
        <h2 className="quote-card">{genQuote}</h2>
        <button onClick={this.ask}>Generate new quote</button>
      </div>
    );
  }
  
}

export default App;
