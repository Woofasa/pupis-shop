import Card from './components/Card/Card';
import Header from './components/Header/Header';
import CartDrawer from './components/CartDrawer/CartDrawer';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('https://681c7886f74de1d219ac85b1.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const handleCartWindow = () => setIsCartOpened(!isCartOpened);

  const addToCart = (item) => {
    const newItem = {
      ...item,
      id: crypto.randomUUID(),
    };
    setTotalPrice(totalPrice + item.price);
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((obj) => obj !== item);
    setTotalPrice(totalPrice - item.price);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <div className="wrapper default">
      {isCartOpened && (
        <CartDrawer
          cartItems={cartItems}
          closeCartPage={handleCartWindow}
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
          clearCart={clearCart}
        />
      )}

      <Header
        onClickCart={handleCartWindow}
        totalPrice={totalPrice}
      />

      <div className="content">
        <div className="content-top">
          <h1>Набор пиздюков</h1>
          <div className="search-block">
            <img
              src="/img/search.svg"
              alt="Поиск"
            />
            <input placeholder="Поиск животины..." />
          </div>
        </div>
        <div className="cardList">
          {items.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              price={item.price}
              imageURL={item.imageURL}
              onAddClick={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
