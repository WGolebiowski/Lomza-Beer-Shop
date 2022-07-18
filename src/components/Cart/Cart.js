import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import OrderDetails from "./OrderDetails";

const Cart = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} zł`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsOrdered(true);
  };

  const orderSubmitHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-7fd09-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalBtn = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Zamknij
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Zamów
        </button>
      )}
    </div>
  );

  const cartContent = (
    <>
      {cartItem}
      <div className={classes.total}>
        <span>Kwota</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdered && (
        <OrderDetails
          onConfirm={orderSubmitHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isOrdered && modalBtn}
    </>
  );

  const isSubmittingContent = <p>Sending order....</p>;

  const didSubmitContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
