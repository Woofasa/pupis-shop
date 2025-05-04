function Card({ name, price }) {
  return (
    <div className="card">
      <button className="like-button">
        <svg
          className="like-icon"
          xmlns="http://www.w3.org/2000/svg"
          height={22}
          width={22}
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
      <img className="main-card-pic" src="/img/animals/cats/krisa.png" alt="jopa" />
      <h4>{name}</h4>
      <div className="add-product">
        <div className="price">
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button className="buy-button">
          <svg
            className="buy-icon"
            height={28}
            width={28}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
