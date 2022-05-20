import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import ReviewItem from "./ReviewItem";
import classes from "./ReviewList.module.css";

const sortReviews = (reviews, ascending) => {
  return reviews.sort((reviewA, reviewB) => {
    if (ascending) {
      return reviewA.publishDate> reviewB.publishDate ? 1 : -1;
    } else {
      return reviewA.publishDate < reviewB.publishDate ? 1 : -1;
    }
  });
};

const ReviewList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedReviews = sortReviews(props.books, isSortingAscending)

  function changeSortHandler() {
    /* history.push(`${location.pathname}?sort=${(isSortingAscending ? "desc" : "asc")}`); */
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? "desc" : "asc")}`
    })
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>Sort {isSortingAscending ? "Descending" : "Ascending" }</button>
      </div>
      <ul className={classes.list}>
        {sortedReviews.map((book) => (
          <ReviewItem
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
            reviewText={book.reviewText}
            src={book.src}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default ReviewList;
