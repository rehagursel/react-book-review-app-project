import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

/* import ReviewList from "./components/bookreviews/ReviewList";
import BookReviewDetail from "./components/bookreviews/BookReviewDetail.js";
import NewBookForm from "./components/bookreviews/NewBookForm"; */

import AllReviews from "./pages/AllReviews";
import ReviewDetail from "./pages/ReviewDetail";
import NewReview from "./pages/NewReview";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/reviewList" />
        </Route>
        <Route path="/reviewList" exact>
          <AllReviews />
        </Route>
        <Route path="/reviewList/:reviewId">
          <ReviewDetail />
        </Route>
        <Route path="/new-review">
          <NewReview />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
