import React from 'react';

import QuoteHeader from './QuoteHeader';
import QuoteBody from './QuoteBody';

const Quote = props => {
  const id = props.id;
  const text = props.text;

  return (
    <div className="card">
      <QuoteHeader id={id} text={text} />
      <QuoteBody id={id} />
    </div>
  );
};

export default Quote;
