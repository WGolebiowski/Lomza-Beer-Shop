import { useRef, useState } from "react";
import classes from "./OrderDetails.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.length === 5;

const OrderDetails = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalIsValid = isFiveChars(enteredPostal);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Please enter valid name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formValidity.street && <p>Please enter valid street.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.postal ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code:</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formValidity.postal && <p>Please enter valid postal code.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City:</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Please enter valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default OrderDetails;
