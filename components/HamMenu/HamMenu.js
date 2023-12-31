import classes from "./HamMenu.module.css"
import { RxHamburgerMenu } from "react-icons/rx";

export default function HamMenu(props) {
  return (
    <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}>
      <span className={classes.mainSpan}><RxHamburgerMenu /></span>
    </div>
  )
}
