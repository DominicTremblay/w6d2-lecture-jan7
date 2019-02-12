import React from 'react';
import CommentFrm from './CommentFrm';

const Comment = ({ id, text }) => {
  return (
    <li className="list-group-item">
      {text}
      <CommentFrm />
    </li>
  );
};
export default Comment;
