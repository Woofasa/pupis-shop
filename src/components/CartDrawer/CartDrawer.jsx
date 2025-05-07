import { use, useState } from 'react';
import styles from './CartDrawer.module.scss';

function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={styles.drawer}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className={styles.drawerHeader}>
        <h2>Корзина</h2>
        <button
          className={styles.cartWindowClose}
          onClick={() => setIsOpen(false)}
        >
          <img
            className={styles.cartXButton}
            src="/img/remove-btn.svg"
            alt="close"
          />
        </button>
      </div>
      <div className={styles.cartItems}>
        <div className={styles.cartItem}>
          <img
            className={styles.cartItemImage}
            src="/img/animals/cats/krisa.png"
            alt="Крыса"
          />
          <div className={styles.cartItemInfo}>
            <p>Крыса срущая и бегущая, а ещё вонючая</p>
            <b>1488 руб.</b>
          </div>
          <img
            className={styles.cartXButton}
            src="/img/remove-btn.svg"
            alt="remove"
          />
        </div>
      </div>
      <ul className={styles.cartTotalPrice}>
        <li>
          <p>Итого:</p>
          <b>1488 руб.</b>
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
