import { useRef } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewBookForm.module.css";
import UploadAndDisplayImage from "./UploadAndDisplayImage";

const NewBookForm = (props) => {
  const nameInputRef = useRef();
  const authorInputRef = useRef();
  const textInputRef = useRef();
  let imgInput;

  function imgInputHandler(img) {
    imgInput = img;
  }

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    
    //  validation will be here

    props.onAddReview({
      name: enteredName,
      author: enteredAuthor,
      text: enteredText,
      image: imgInput,
    });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
        <UploadAndDisplayImage onAddImage={imgInputHandler} />
        <div className={classes.control}>
          <label htmlFor="name">Book Name</label>
          <input type="text" id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="reviewText">Review</label>
          <textarea id="reviewText" rows="15" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add New Book Review</button>
        </div>
      </form>
    </Card>
  );
};

export default NewBookForm;
