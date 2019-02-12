import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  const commentsEl = comments.map(commentObj => (
    <Comment key={commentObj.id} id={commentObj.id} text={commentObj.text} />
  ));

  return <ul className="list-group">{commentsEl}</ul>;
};

export default CommentList;
