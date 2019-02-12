import React from 'react';
import CommentFrm from './CommentFrm';

const Comment = props => {
  return (
    <li className="list-group-item">
      So awesome comment!
      <CommentFrm />
    </li>
  );
};
export default Comment;
