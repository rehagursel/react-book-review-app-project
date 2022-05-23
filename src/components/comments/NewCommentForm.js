
import { useRef, useEffect } from "react";

import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() =>{
    if(status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredComment = commentTextRef.current.value;

    const newComment = {
      text: enteredComment
    }
    // Could validate here

    sendRequest({ commentData: newComment, reviewId: props.reviewId});
 
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        {status === "pending" && <LoadingSpinner/>}
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
