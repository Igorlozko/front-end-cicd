import { useRef } from 'react';
import classes from './AddReview.module.css';

function AddReview(props) {
  const reviewTextInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredReviewText = reviewTextInputRef.current.value;

    const reviewData = {
      reviewText: enteredReviewText,
    };

    props.onAddReview(reviewData);
  }

  return (
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
        <div className={classes.reviewDiv}>
          <label htmlFor='reviewText'>Enter Review</label>
          <input type='text' required id='reviewText' ref={reviewTextInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Review</button>
        </div>
        </div>
      </form>
  );
}

export default AddReview;
