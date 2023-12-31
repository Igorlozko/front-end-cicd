import BookItem from './BookItem';
import classes from './BookList.module.css';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

function BookList(props) {
  return (
    <div className={classes.carouselContainer} > 
    <Carousel className={classes.carouselStyle} >
      {props.books.map((book) => (
        <Paper key ={book.bookId}>
        <BookItem
          key={book.bookId}
          bookId={book.bookId}
          poster={book.poster}
          title={book.title}
          author={book.author}
          releaseDate={book.releaseDate}
          reviewLink={book.reviewLink}
        />
        </Paper>

      ))}
    </Carousel>
    </div>
  );
}

export default BookList;



