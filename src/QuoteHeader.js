import React from 'react';
import QuoteFrm from './QuoteFrm';

const QuoteHeader = props => {
  const id = props.id;
  const text = props.text;

  return (
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button
          className="btn btn-link collapsed"
          type="button"
          data-toggle="collapse"
          data-target={`#cf810aa6-${id}`}
          aria-expanded="false"
          aria-controls="collapseTwo">
          {text}
        </button>
      </h5>

      <QuoteFrm />
    </div>
  );
};

export default QuoteHeader;
