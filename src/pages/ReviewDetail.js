import React from "react";
import { useParams, Route } from "react-router-dom";

import BookReviewDetail from "../components/bookreviews/BookReviewDetail";
import Comments from "../components/comments/Comments";
const ReviewDetail = () => {
  const params = useParams();

  return (
    <React.Fragment>
      <br/>
     <br/>
      <p>{params.reviewId}</p>
      {/* <BookReviewDetail/> */}
      <Route path={`/reviewList/${params.reviewId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default ReviewDetail;
