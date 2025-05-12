import Card from './components/Card/Card';
import Header from './components/Header/Header';
import CartDrawer from './components/CartDrawer/CartDrawer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const totalPrice = cartItems.reduce((acc, num) => acc + num.price, 0);

  useEffect(() => {
    axios
      .get('https://681c7886f74de1d219ac85b1.mockapi.io/items')
      .then((res) => setItems(res.data));
    axios
      .get('https://681c7886f74de1d219ac85b1.mockapi.io/cart')
      .then((res) => setCartItems(res.data));
  }, []);

  const handleCartWindow = () => setIsCartOpened(!isCartOpened);

  const addToCart = async (item) => {
    const r = await axios.post('https://681c7886f74de1d219ac85b1.mockapi.io/cart', item);
    setCartItems((prev) => [...prev, r.data]);
  };

  const removeFromCart = (id) => {
    axios.delete(`https://681c7886f74de1d219ac85b1.mockapi.io/cart/${id}`);
    setCartItems(cartItems.filter((obj) => obj.id !== id));
  };

  const clearCart = async () => {
    const clearCart = cartItems.map((item) =>
      axios.delete(`https://681c7886f74de1d219ac85b1.mockapi.io/cart/${item.id}`)
    );
    await Promise.all(clearCart);

    setCartItems([]);
  };

  const inputChange = (event) => {
    setInputValue(event.target.value);
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
          <h1>{inputValue ? `Поиск по: "${inputValue}"` : `Все пиздюки`}</h1>
          <div className="search-block">
            <img
              src="/img/search.svg"
              alt="Поиск"
            />
            <input
              placeholder={'Поиск животинки...'}
              value={inputValue}
              onChange={inputChange}
            />
          </div>
        </div>
        <div className="cardList">
          {items
            .filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map((item) => (
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
