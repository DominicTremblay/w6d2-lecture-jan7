import React from 'react';

import QuoteHeader from './QuoteHeader';
import QuoteBody from './QuoteBody';

const Quote = ({ id, text, comments }) => {
  // const id = props.id;
  // const text = props.text;
  // const comments =props.comments;

  // ES6
  // const { id, text, comments } = props;

  return (
    <div className="card">
      <QuoteHeader id={id} text={text} />
      <QuoteBody id={id} comments={comments} />
    </div>
  );
};

export default Quote;
