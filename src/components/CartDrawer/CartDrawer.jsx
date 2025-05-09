import styles from './CartDrawer.module.scss';

function CartDrawer({ cartItems, onClosePage }) {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawerHeader}>
        <h2>Корзина</h2>
        <button
          className={styles.cartWindowClose}
          onClick={onClosePage}
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
          <div className={styles.cartItem}>
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
            />
          </div>
        ))}
      </div>
      <ul className={styles.cartTotalPrice}>
        <li>
          <p>Итого:</p>
          <b>1234 руб.</b>
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
