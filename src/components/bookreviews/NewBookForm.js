import React, { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewBookForm.module.css";

const NewBookForm = (props) => {
  const [isEntered, setIsEntered] = useState(false);
  const nameInputRef = useRef();
  const authorInputRef = useRef();
  const reviewAuthorInputRef = useRef();
  const publishInputRef = useRef();
  const textInputRef = useRef();
  const imgInputRef = useRef();


  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredReviewAuthor = reviewAuthorInputRef.current.value;
    const enteredDate = publishInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredImg = URL.createObjectURL(imgInputRef.current.files[0]);

    //  validation will be here

    props.onAddReview({
      name: enteredName,
      bookAuthor: enteredAuthor,
      author: enteredReviewAuthor,
      publishDate: enteredDate,
      reviewText: enteredText,
      src: enteredImg,
    });
  }

  function formFocusedHandler() {
    setIsEntered(true);
  }

  function finishFocusedHandler() {
    setIsEntered(false);
  }

  return (
    <React.Fragment>
      <Prompt
        when={isEntered}
        message={(location) =>
          "Are you sure, you want to leave? Entered data will be lost!!"
        }
      />
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={formFocusedHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}
          <div className={classes.control}>
            <label htmlFor="myImage">Upload Book Cover</label>
            <input required type="file" name="myImage" ref={imgInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Book Name</label>
            <input required type="text" id="name" ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="author">Book Author</label>
            <input required type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="publish">Publish Date</label>
            <input required type="date" id="publish" ref={publishInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="rauthor">Name and Surname</label>
            <input required type="text" id="rauthor" ref={reviewAuthorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="reviewText">Review</label>
            <textarea required  id="reviewText" rows="15" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishFocusedHandler}>
              Add New Book Review
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default NewBookForm;
