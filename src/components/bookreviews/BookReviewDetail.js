import classes from "./BookReviewDetail.module.css";

const BookReviewDetail = (props) => {
  return (
    <figure className={classes.review}>
      <h1>{book.name}</h1>
      <p>{book.summary}</p>
      <figcaption>{book.author}</figcaption>
    </figure>
  );
};

export default BookReviewDetail;
