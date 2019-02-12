import React, { Component } from 'react';
import './App.css';
import QuoteList from './QuoteList';

class App extends Component {
  state = {
    quotes: [
      {
        id: 3,
        text: "It's called a hustle, sweetheart.",
        movie_id: 3,
        created_at: '2019-02-09T08:02:41.355Z',
        updated_at: '2019-02-09T08:02:41.355Z',
        comments: [
          {
            id: 1,
            text: 'Star wars needs to die!',
            quote_id: 3,
            created_at: '2019-02-09T08:02:41.366Z',
            updated_at: '2019-02-09T08:02:41.366Z',
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <h1>Movie Quotes</h1>
        <QuoteList quotes={this.state.quotes} />
        <a href="/quotes/new" class="btn btn-primary">
          Add Quote
        </a>
      </div>
    );
  }
}

export default App;
