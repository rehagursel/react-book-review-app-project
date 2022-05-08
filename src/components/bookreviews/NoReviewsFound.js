import classes from './NoReviewsFound.module.css';

const NoReviewsFound = () => {
  return (
    <div className={classes.noreviews}>
      <p>No reviews found!</p>
      <a className='btn'>
        Add a Book
      </a>
    </div>
  );
};

export default NoReviewsFound;
