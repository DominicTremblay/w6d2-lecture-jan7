import React from 'react';

const QuoteFrm = props => {
  return (
    <span>
      <form method="get" action="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb">
        <input
          type="submit"
          className="btn btn-secondary btn-sm"
          value="Edit"
        />
      </form>

      <form
        method="post"
        action="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb?_method=DELETE">
        <input
          type="submit"
          className="btn btn-secondary btn-sm"
          value="Delete"
        />
      </form>
    </span>
  );
};

export default QuoteFrm;
