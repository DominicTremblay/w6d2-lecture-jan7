import React, { Component } from 'react';
import './App.css';
import QuoteList from './QuoteList';
import AddQuote from './AddQuote';
import uuid from 'uuid';
class App extends Component {
  state = {
    quotes: [],
  };

  addQuote = quote => {
    const newQuote = {
      id: uuid.v1(),
      text: quote,
      comments: [],
    };
    // merging my current array of quotes with new quotes
    const newQuotes = [...this.state.quotes, newQuote];

    this.setState({ quotes: newQuotes }, () => console.log(this.state));
  };

  componentDidMount() {
    const url = '/api/quotes';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    };

    fetch(url, options)
      .then(response => response.json())
      .then(quotes => {
        // this.setState({ quotes });

        const quotesArr = quotes.map(quoteObj => {
          quoteObj.comments = quoteObj.comments || [];
          return quoteObj;
        });

        this.setState({ quotes: quotesArr }, () => console.log(this.state));
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Movie Quotes</h1>
        <QuoteList quotes={this.state.quotes} />
        <AddQuote addQuote={this.addQuote} someProps="someprops" />
      </div>
    );
  }
}

export default App;
