import { Link } from "react-router-dom";

import classes from "./NoReviewsFound.module.css";

const NoReviewsFound = () => {
  return (
    <div className={classes.noreviews}>
      <p>No reviews found!</p>
      <Link to="/new-review" className="btn">
        Add New Book Review
      </Link>
    </div>
  );
};

export default NoReviewsFound;
