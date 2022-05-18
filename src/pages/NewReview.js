import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import NewBookForm from "../components/bookreviews/NewBookForm";
import useHttp from "../hooks/use-http";
import addReview from "../lib/api";

const NewReview = () => {
  const { sendRequest, status } = useHttp(addReview);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/reviewList");
    }
  }, [status, history]);

  const addReviewHandler = (newReviewData) => {
    sendRequest(newReviewData);
  };

  return (
    <React.Fragment>
      <NewBookForm isLoading={status === "pending"} onAddReview={addReviewHandler} />
    </React.Fragment>
  );
};

export default NewReview;
