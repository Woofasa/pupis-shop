import Card from './components/Card/Card';
import Header from './components/Header/Header';
import CartDrawer from './components/CartDrawer/CartDrawer';
import { useState } from 'react';

const arr = [
  { id: 1, name: 'Кошка срущая', price: 14800, imageURL: '/img/animals/cats/krisa.png' },
  { id: 2, name: 'Дурында', price: 12342, imageURL: '/img/animals/cats/cat-na-negative.png' },
  { id: 3, name: 'Срака', price: 12342, imageURL: '/img/animals/cats/cat-srushiy.png' },
  { id: 4, name: 'Жопа', price: 12342, imageURL: '/img/animals/cats/cat-v-otrube.png' },
];

function App() {
  return (
    <div className="wrapper default">
      <CartDrawer isOpen={false} />
      <Header />
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
        <div className="card-list">
          {arr.map((i) => (
            <Card
              key={i.id}
              name={i.name}
              price={i.price}
              imageURL={i.imageURL}
              likeButtonClick={() => console.log('Добавлено в избранное')}
              buyButtonClick={() => console.log('Добавлено в корзину')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
