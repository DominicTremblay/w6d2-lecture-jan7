import React, { Component } from 'react';
import './App.css';
import QuoteList from './QuoteList';

class App extends Component {
  state = { quotes: [] };

  render() {
    return (
      <div className="container">
        <h1>Movie Quotes</h1>
        <QuoteList />
        <a href="/quotes/new" class="btn btn-primary">
          Add Quote
        </a>
      </div>
    );
  }
}

export default App;
