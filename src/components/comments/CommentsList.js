import React from 'react';

import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = ({commentList}) => {


  return (
    <ul className={classes.comments}>
      {commentList.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
