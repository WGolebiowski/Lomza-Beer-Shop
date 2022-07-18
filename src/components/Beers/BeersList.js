import { useEffect, useState } from "react";
import Card from "../UI/Card";
import BeerItem from "./BeerItem";
import classes from "./BeersList.module.css";

const BeersList = (props) => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-7fd09-default-rtdb.europe-west1.firebasedatabase.app/Beers.json"
      );
      const responseJSON = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const loadedBeers = [];

      for (const key in responseJSON) {
        loadedBeers.push({
          id: key,
          name: responseJSON[key].name,
          description: responseJSON[key].description,
          price: responseJSON[key].price,
        });
      }
      setBeers(loadedBeers);
      setIsLoading(false);
    };

    fetchData().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (error) {
    return (
      <section className={classes.error}>
        <p>{error}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading...</p>
      </section>
    );
  }

  const beersList = beers.map((beer) => (
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
