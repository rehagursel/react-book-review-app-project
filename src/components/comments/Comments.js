import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from '../UI/LoadingSpinner';



const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { reviewId } = params;

  const {
    sendRequest,
    status,
    data: loadedComments,
    error
  } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(reviewId);
  },[reviewId,sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(reviewId)
  },[sendRequest, reviewId]) 

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    comments = <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0) 
  ) {
    comments = <p>No Comments Added</p>;
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments =  <CommentsList commentList={loadedComments} />;
  }

  
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm reviewId={reviewId} onAddedComment={addedCommentHandler} />}
     {comments}
    </section>
  );
};

export default Comments;
