import classes from "./BookReviewDetail.module.css";

const BookReviewDetail = (props) => {
  return (
    <div className={classes.coverBox}>
      <h1>{props.reviewDetail.name}</h1>
      <div className={classes.cover}>
        <div className={classes.bookDetails}>
          <img src={props.reviewDetail.src} alt="book-cover" />
          <p className={classes.bold}>Author :</p>
          <p>{props.reviewDetail.bookAuthor}</p>
          <p className={classes.bold}>Publish Date :</p>
          <p>{props.reviewDetail.publishDate}</p>
        </div>
        <div className={classes.reviewBox}>
          <p className={classes.review}>{props.reviewDetail.reviewText}</p>
          <p className={classes.author}>{props.reviewDetail.author}</p>
        </div>
      </div>
    </div>
  );
};

export default BookReviewDetail;
