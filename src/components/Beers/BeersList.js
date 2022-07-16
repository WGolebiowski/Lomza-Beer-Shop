import Card from "../UI/Card";
import BeerItem from "./BeerItem";
import classes from "./BeersList.module.css";

const BEERS_DATA = [
  {
    id: "b1",
    name: "Miodowe",
    description:
      "Miód z certyfikowanych pasiek był idealnym dodatkiem do klasycznej Łomży – dzięki czemu powstało piwo o delikatnym, słodko-gorzkim smaku oraz nutą miodowego aromatu.",
    price: 2.99,
  },
  {
    id: "b2",
    name: "Jasne",
    description:
      "Łomża Jasne to uznany ambasador marki Łomża. Jest piwem dolnej fermentacji, którego receptura opiera się na użyciu starannie dobranych składników.",
    price: 2.99,
  },
  {
    id: "b3",
    name: "Pils",
    description:
      "Szlachetność naszego piwa sprowadza się do jednego prostego słowa: chmiel. To jemu nasze piwo zawdzięcza świeży zapach i głęboki, pełny smak.",
    price: 2.99,
  },
  {
    id: "b4",
    name: "Radler",
    description:
      "Połączenie piwa Łomża i lemoniady z soczystych cytrusów zapewnia orzeźwienie nawet w najbardziej upalne dni polskiego lata.",
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
