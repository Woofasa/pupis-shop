import Card from './components/Card/Card';
import Header from './components/Header/Header';
import CartDrawer from './components/CartDrawer/CartDrawer';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://681c7886f74de1d219ac85b1.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const handleIsCartOpened = () => setIsCartOpened(!isCartOpened);
  const addToCart = (item) => setCartItems([...cartItems, item]);

  return (
    <div className="wrapper default">
      {isCartOpened && (
        <CartDrawer
          cartItems={cartItems}
          onClosePage={handleIsCartOpened}
        />
      )}

      <Header onClickCart={handleIsCartOpened} />

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
