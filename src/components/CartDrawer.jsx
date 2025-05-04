function CartDrawer() {
  return (
    <div className="drawer">
      <div className="drawer-header">
        <h2>Корзина</h2>
        <img className="cart-x-button" src="/img/remove-btn.svg" alt="close" />
      </div>
      <div className="cart-items">
        <div className="cart-item">
          <img className="cart-item-image" src="/img/animals/cats/krisa.png" alt="Крыса" />
          <div className="cart-item-info">
            <p>Крыса срущая и бегущая, а ещё вонючая</p>
            <b>1488 руб.</b>
          </div>
          <img className="cart-x-button" src="/img/remove-btn.svg" alt="remove" />
        </div>
      </div>
      <ul className="cart-total-price">
        <li>
          <p>Итого:</p>
          <b>1488 руб.</b>
        </li>
        <li>
          <p>Скидка:</p>
          <b>Хуй, а не скидка</b>
        </li>
      </ul>
      <button className="cart-button">Оформить жопышей</button>
    </div>
  );
}

export default CartDrawer;
