import BeerItemForm from "./BeerItemForm";
import classes from "./BeerItem.module.css";

const BeerItem = (props) => {
  const price = `${props.price.toFixed(2)} zł`;

  return (
    <li className={classes.beer}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <BeerItemForm />
      </div>
    </li>
  );
};

export default BeerItem;
