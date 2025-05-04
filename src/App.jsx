import Card from './components/Card';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <div className="wrapper default">
      <CartDrawer />
      <Header />
      <div className="content">
        <div className="content-top">
          <h1>Набор пиздюков</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Поиск" />
            <input placeholder="Поиск животины..." />
          </div>
        </div>
        <div className="card-list">
          <Card name={'Кошка дурёшка'} price={322} />
          <Card name={'Дурында'} price={500} />
          <Card name={'Срака'} price={2400} />
          <Card name={'Кака'} price={1200} />
          <Card name={'Попа'} price={252300} />
        </div>
      </div>
    </div>
  );
}

export default App;
