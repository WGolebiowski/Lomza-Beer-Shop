import classes from "./HeaderCart.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCart = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Koszyk</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCart;
