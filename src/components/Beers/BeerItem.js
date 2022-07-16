import { useContext } from "react";

import BeerItemForm from "./BeerItemForm";
import classes from "./BeerItem.module.css";
import CartContext from "../../store/cart-context";

const BeerItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)} zł`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.beer}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <BeerItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default BeerItem;
