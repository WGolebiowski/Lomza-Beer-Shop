import { useState } from "react";
import "./App.css";

import Header from "./components/Layout/Header";
import HeaderText from "./components/Layout/HeaderText";
import Beers from "./components/Beers/Beers";
import Cart from "./components/Cart/Cart";

import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <CartProvider>
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <HeaderText />
        <main>
          <Beers />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
