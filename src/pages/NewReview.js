import React from "react";
import { useHistory } from "react-router-dom";
import NewBookForm from "../components/bookreviews/NewBookForm";

const NewReview = () => {
  const history = useHistory();
  
  const addReviewHandler = (data) => {
    history.push("/reviewList");
    console.log("test", data);
  };

  return (
    <React.Fragment>
      <NewBookForm onAddReview={addReviewHandler} />
    </React.Fragment>
  );
};

export default NewReview;
