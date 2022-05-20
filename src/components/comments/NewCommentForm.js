import { useEffect } from "react";
import { useRef } from "react";

import { addComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const { sendRequest } = useHttp(addComment);
  const commentTextRef = useRef();
  let enteredComment;
  useHttp();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const comment = commentTextRef.current.value;
    

    enteredComment = {
      text: comment,
    };

   

   

    // optional: Could validate here

    // send comment to server
  };

  useEffect(() => {
    sendRequest(enteredComment)
  }, [enteredComment,sendRequest]);
 

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} >
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
