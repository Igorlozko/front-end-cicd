import { useRef } from 'react';
import Card from '../Card';
import classes from './AddBookForm.module.css';

function AddBookForm(props) {
  const bookIdInputRef = useRef();
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const posterInputRef = useRef();
  const releaseDateInputRef = useRef();
  const reviewLinkInputRef = useRef();
  const genresInputRef = useRef(); 
  const backdropsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredBookId = bookIdInputRef.current.value;
    const enteredTitle = titleInputRef.current.value;
    const enteredAuthor = authorInputRef.current.value;
    const enteredPoster = posterInputRef.current.value;
    const enteredReleaseDate = releaseDateInputRef.current.value;
    const enteredReviewLink = reviewLinkInputRef.current.value;

    const bookData = {
      bookId: enteredBookId,
      title: enteredTitle,
      author: enteredAuthor,
      poster: enteredPoster,
      releaseDate: enteredReleaseDate,
      reviewLink: enteredReviewLink,
    };

    props.onAddBook(bookData);
  }

  return (
    <Card>
      <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
          <label htmlFor='bookId'>Book Id</label>
          <input type='text' required id='bookId' ref={bookIdInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Book Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='author'>Book Author </label>
          <input type='text' required id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='poster'>Book Poster</label>
          <input type='url' required id='poster' ref={posterInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='releaseDate'>Release Date</label>
          <input type='text' required id='releaseDate' ref={releaseDateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='reviewLink'>Book Review Link</label>
          <input type='url' required id='reviewLink' ref={reviewLinkInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Book</button>
        </div>
      </form>
      <div className={classes.imageContainer}>
            {/* Your image boxes go here */}
            {/* Example: */}
            <div className={classes.imageBox}>
              <img src="books.jpg" alt="Image 1" />
            </div>
            <div className={classes.imageBox}>
              <img src="books2.jpg" alt="Image 2" />
            </div>
            <div className={classes.imageBox}>
              <img src="books3.jpg" alt="Image 3" />
            </div>
            <div className={classes.imageBox}>
              <img src="books4.jpg" alt="Image 4" />
            </div>
            <div className={classes.actions}></div>
          </div>
    </div>
    </Card>
  );
}

export default AddBookForm;
