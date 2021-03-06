import React from 'react';
import CommentList from './CommentList';

const QuoteBody = ({ id, comments }) => {
  // const id = props.id;
  // const comments = props.comments;
  return (
    <div
      id={`cf810aa6-${id}`}
      className="collapse"
      aria-labelledby="headingTwo"
      data-parent="#quote-list"
      aria-expanded="false">
      <div className="card-body">
        <h4>Comments</h4>
        <CommentList comments={comments} />
        <a
          href="/quotes/d9424e04-9df6-4b76-86cc-9069ca8ee4bb/comments/new"
          className="btn btn-info">
          Add Comment
        </a>
      </div>
    </div>
  );
};

export default QuoteBody;
