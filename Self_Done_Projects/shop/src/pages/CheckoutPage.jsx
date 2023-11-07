import React from "react";
import Subtotal from "../components/Subtotal";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";



const CheckoutPage = () => {

  const cartItems = useSelector(state=> state.cart.items);

  

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout_Page_Image"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {cartItems.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default CheckoutPage;
