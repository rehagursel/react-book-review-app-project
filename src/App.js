import React, { useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import AllReviews from "./pages/AllReviews";
import ReviewDetail from "./pages/ReviewDetail";
import NewReview from "./pages/NewReview";
import Layout from "./components/layout/Layout";

function App() {
  let history = useHistory();
  useEffect(() => {
    history.push("/reviewList");
  }, [history]);

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
