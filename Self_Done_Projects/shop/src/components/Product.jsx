import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  const addBasketHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      price,
      image,
      title,
      rating,
    }));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={addBasketHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;
