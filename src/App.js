import "./App.css";

import Header from "./components/Layout/Header";
import HeaderText from "./components/Layout/HeaderText";
import Beers from "./components/Beers/Beers";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderText />
      <Beers />
    </div>
  );
}

export default App;
