import { Fragment } from 'react';

import ReviewItem from './ReviewItem';
import classes from './ReviewList.module.css';

const ReviewList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.books.map((book) => (
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
