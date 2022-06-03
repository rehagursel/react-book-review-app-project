import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import AllReviews from "./pages/AllReviews";
import ReviewDetail from "./pages/ReviewDetail";
import Layout from "./components/layout/Layout";

const NewReview = React.lazy(() => import("./pages/NewReview"));

function App() {
  let history = useHistory();
  useEffect(() => {
    history.push("/reviewList");
  }, [history]);

  return (
    <Layout>
      <Suspense>
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
      </Suspense>
    </Layout>
  );
}

export default App;
