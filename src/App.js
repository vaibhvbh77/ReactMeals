import Cart from "./Cart/Cart";
import Header from "./components/Header";
import Meals from "./Meals/Meals";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(true);
  const showCartHandler = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <div>
      <h2>
        {showCart && <Cart onShowCart={showCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </h2>
    </div>
  );
}

export default App;
