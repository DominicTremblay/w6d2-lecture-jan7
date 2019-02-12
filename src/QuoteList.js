import React from 'react';
import Quote from './Quote';

// destructuring directly into the input parameter
const QuoteList = ({ quotes }) => {
  // classic
  // const quotes = props.quotes;

  // ES6 Desctructuring
  // const { quotes } = props;

  const quotesEl = quotes.map(quote => (
    <Quote
      key={quote.id}
      id={quote.id}
      text={quote.text}
      comments={quote.comments}
    />
  ));

  return (
    <div className="accordion" id="quote-list">
      {quotesEl}
    </div>
  );
};

export default QuoteList;
