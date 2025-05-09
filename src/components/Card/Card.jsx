import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ name, price, imageURL, onAddClick }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleIsAdded = () => {
    setIsAdded(!isAdded);
    onAddClick({ name, price, imageURL });
  };
  const handleIsLiked = () => setIsLiked(!isLiked);

  return (
    <div className={styles.card}>
      <button
        className={styles.likeButton}
        onClick={handleIsLiked}
      >
        <svg
          className={`${styles.likeIcon} ${isLiked ? styles.active : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          height={22}
          width={22}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
      <img
        className={styles.mainCardPic}
        src={imageURL}
        alt="jopa"
      />
      <h4>{name}</h4>
      <div className={styles.addProduct}>
        <div className={styles.price}>
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button
          className={styles.buyButton}
          onClick={handleIsAdded}
        >
          <svg
            className={`${styles.buyIcon} ${isAdded ? styles.active : ''}`}
            height={28}
            width={28}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
