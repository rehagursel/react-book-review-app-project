import { Link } from "react-router-dom";

import classes from "./ReviewItem.module.css";

const ReviewItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.coverBox}>
        <h1>{props.name}</h1>
        <div className={classes.cover}>
          <img src={props.src} alt="book-cover" />
          <div className={classes.reviewBox}>
            <p className={classes.review}>{props.reviewText}</p>
            <p className={classes.author}>{props.author}</p>
          </div>
          <Link to="/reviewList/:reviewId" className="btn">
            View Detail
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
