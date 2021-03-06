import React from 'react';

const CommentFrm = props => {
  return (
    <span>
      <form
        method="get"
        action="/comments/70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac/update">
        <input
          type="submit"
          className="btn btn-secondary btn-sm"
          value="Edit"
        />
      </form>

      <form
        method="post"
        action="/comments/70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac?_method=DELETE">
        <input
          type="submit"
          className="btn btn-secondary btn-sm"
          value="Delete"
        />
      </form>
    </span>
  );
};

export default CommentFrm;
