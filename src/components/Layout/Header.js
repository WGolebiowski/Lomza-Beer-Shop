import { Fragment } from "react";

import HeaderCart from "./HeaderCart";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.logo}>Łomża</h1>
        <HeaderCart />
      </header>
    </Fragment>
  );
};

export default Header;
