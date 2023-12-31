import classes from './MainNavigation.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import GlobalContext from '@/pages/store/globalContext'
import { useRouter } from 'next/router'
import HamMenuContent from './HamMenu/HamMenuContent'
import HamMenu from './HamMenu/HamMenu'
import BookSearch from './BookSearch'; 

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function toggleMenuHide() {
    globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: false })
  }

  const contents = []
  globalCtx.theGlobalObject.favourites.forEach(element => {
    contents.push({title: element.title, webAddress: '/' + element.bookId})    
  });

  return (
    <header className={classes.header}>
      <HamMenuContent contents ={contents} />
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <nav>
        <ul>
          <li>
            <Link href='/'>All Books</Link>
          </li>
          <li>
            <Link href='/new-book'>Add New Book</Link>
          </li>
          <li>
          <Link href='/about'>About</Link>
          </li>
          <BookSearch onSearch={(keyword) => router.push(`/search?keyword=${keyword}`)} />
        </ul>
      </nav>
    </header>
    
    
  );
}

export default MainNavigation
