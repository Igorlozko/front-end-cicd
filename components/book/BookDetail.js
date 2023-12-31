import classes from './BookDetail.module.css';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react'
import GlobalContext from '../../pages/store/globalContext'
import AddReview from '../AddReview';

function BookDetail(props) {

    const [revText, setReviewText] = useState( <h2></h2> )

    const router = useRouter();
    const [favText, setFavText] = useState('Add to favourites')
    const globalCtx = useContext(GlobalContext)
    

    function addReviewHandler(enteredReviewData) {
        console.log(enteredReviewData.reviewText)
        setReviewText(revText === <h2></h2> ? <h2></h2> : <h2>{enteredReviewData.reviewText}</h2>); 
    }


    const favHandleClick = () => { 
      setFavText(favText === 'Add to favourites' ? 'Remove from favourites' : 'Add to favourites'); 
        if (favText == 'Add to favourites') {
          globalCtx.updateGlobals({ cmd: 'addToFavMenu', newVal: props })
        } else {
          globalCtx.updateGlobals({ cmd: 'removeFavMenu', newVal: props })
        }
    }; 


  return (
    <section className={classes.detail}>
      <div className={classes.bookDetails}>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#800000' }}>
            {props.title}
        </div>
        <div className={classes.imageDiv}>
          <img src={props.poster} alt={props.title} />
        </div>
        <div className={classes.textDiv}>
          <h2>{props.author}</h2>
          <h2 style={{ marginBottom: '1em' }}>{props.releaseDate}</h2>
          <div className={classes.buttonDiv}>
          <a href={props.reviewLink} className={classes.reviewLink}>
            <div style={{ border: '2px solid #ffcccc', backgroundColor: '#ffe6e6', padding: '1em', borderRadius: '8px', display: 'inline-block', paddingTop: '0.5em' }}>
                Review on Youtube!
            </div>
            </a>
            <button  style={{ border: '2px solid #ffcccc', backgroundColor: '#ffe6e6', padding: '1em', borderRadius: '8px', display: 'inline-block', paddingTop: '0.5em',  width: '250px', height: '85px'}} onClick={favHandleClick}> {favText}</button>
            <div className={classes.reviewLink}>
            <AddReview onAddReview={addReviewHandler} />
            </div>
            </div>
            {revText}
        </div>
      </div>
    </section>
  );
}

export default BookDetail;