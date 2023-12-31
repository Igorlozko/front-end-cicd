// Layout.js

import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import BookSearch from './BookSearch';

function Layout(props) {
  return (
    <div className={classes.container}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      
    </div>
      
    
  );
}

export default Layout;
