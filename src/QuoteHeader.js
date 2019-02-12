import React from 'react';
import QuoteFrm from './QuoteFrm';

const QuoteHeader = props => {
  return (
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button
          className="btn btn-link collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#d9424e04-9df6-4b76-86cc-9069ca8ee4bb"
          aria-expanded="false"
          aria-controls="collapseTwo">
          Why so serious?
        </button>
      </h5>

      <QuoteFrm />
    </div>
  );
};

export default QuoteHeader;
