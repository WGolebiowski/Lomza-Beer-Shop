import Card from "../UI/Card";
import BeerItem from "./BeerItem";
import classes from "./BeersList.module.css";

const BEERS_DATA = [
  {
    id: "b1",
    name: "Wyborowe",
    description: "",
    price: 2.99,
  },
  {
    id: "b2",
    name: "Jasne pełne",
    description: "",
    price: 2.99,
  },
  {
    id: "b3",
    name: "Pils",
    description: "",
    price: 2.99,
  },
  {
    id: "b4",
    name: "Radler",
    description: "",
    price: 2.99,
  },
];

const BeersList = (props) => {
  const beersList = BEERS_DATA.map((beer) => (
    <BeerItem
      key={beer.id}
      id={beer.id}
      name={beer.name}
      description={beer.description}
      price={beer.price}
    />
  ));

  return (
    <section className={classes.beers}>
      <Card>
        <ul>{beersList}</ul>
      </Card>
    </section>
  );
};

export default BeersList;
