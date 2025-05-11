import styles from './CartDrawer.module.scss';

function CartDrawer({ cartItems, closeCartPage, removeFromCart, totalPrice, clearCart }) {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawerHeader}>
        <h2>Корзина</h2>
        <button onClick={() => clearCart()}>Очистить корзину</button>
        <button
          className={styles.cartWindowClose}
          onClick={closeCartPage}
        >
          <img
            className={styles.cartXButton}
            src="/img/remove-btn.svg"
            alt="close"
          />
        </button>
      </div>
      <div className={styles.cartItems}>
        {cartItems.map((cartItem) => (
          <div
            className={styles.cartItem}
            key={cartItem.id}
          >
            <img
              className={styles.cartItemImage}
              src={cartItem.imageURL}
              alt="Крыса"
            />
            <div className={styles.cartItemInfo}>
              <p>{cartItem.name}</p>
              <b>{cartItem.price} руб.</b>
            </div>
            <img
              className={styles.cartXButton}
              src="/img/remove-btn.svg"
              alt="remove"
              onClick={() => removeFromCart(cartItem)}
            />
          </div>
        ))}
      </div>
      <ul className={styles.cartTotalPrice}>
        <li>
          <p>Итого:</p>
          <b>{totalPrice} руб.</b>
        </li>
        <li>
          <p>Скидка:</p>
          <b>Хуй, а не скидка</b>
        </li>
      </ul>
      <button className={styles.cartButton}>Оформить жопышей</button>
    </div>
  );
}

export default CartDrawer;
