import React from 'react';
import Quote from './Quote';

const QuoteList = props => {
  const quotes = props.quotes;
  const quotesEl = quotes.map(quote => (
    <Quote id={quote.id} text={quote.text} />
  ));

  return (
    <div className="accordion" id="quote-list">
      {quotesEl}
    </div>
  );
};

export default QuoteList;
