import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function CheckoutProduct({ id, image, title, price, rating }) {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
