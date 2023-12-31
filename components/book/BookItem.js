import classes from './BookItem.module.css';
import { useRouter } from 'next/router';
import { CiStar } from "react-icons/ci"
import { useContext, useState } from 'react'
import GlobalContext from '../../pages/store/globalContext'

function BookItem(props) {
  const router = useRouter();
  const [favText, setFavText] = useState('Add to favourites')
  const globalCtx = useContext(GlobalContext)
  
  const favHandleClick = () => { 
    setFavText(favText === 'Add to favourites' ? 'Remove from favourites' : 'Add to favourites'); 
      if (favText == 'Add to favourites') {
        globalCtx.updateGlobals({ cmd: 'addToFavMenu', newVal: props })
      } else {
        globalCtx.updateGlobals({ cmd: 'removeFavMenu', newVal: props })
      }
  
  }; 

  function showDetailsHandler() {
    router.push('/' + props.bookId);
  }

  return (
    <div>
 <div className={classes.image}>
 <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#800000', textAlign: 'center' }}>
  {props.title}
</div>
          <img src={props.poster} alt={props.title} />
        </div>
        <div className={classes.content}>
        </div>
      <div className={classes.actions}>
        <button onClick={showDetailsHandler}>Show Book</button>
        <button onClick={favHandleClick}> {favText}</button>
      </div>
    </div>

  );
}

export default BookItem;
