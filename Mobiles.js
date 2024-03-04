import React, { useState } from "react";
import Mobile from './Mobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Mobiles = ({ mobiles, removeMobile, removeMobileBy0 }) => {
  const [mobilesState, setMobiles] = useState(mobiles);
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(mobilesState));
  const [totalQuantity, setTotalQuantity] = useState(calculateTotalQuantity(mobilesState));

  function calculateTotalPrice(mobiles) {
    return mobiles.reduce((total, device) => {
      const devicePrice = Number(device.price);
      const deviceQuantity = Number(device.quantity);
      return total + devicePrice * deviceQuantity;
    }, 0);
  }

  function calculateTotalQuantity(mobiles) {
    return mobiles.reduce((totalQuantity, device) => {
      const deviceQuantity = Number(device.quantity);
      return totalQuantity + deviceQuantity;
    }, 0);
  }

  function handleQuantityChange(id, quantity) {
    const updatedMobiles = mobilesState.map((mobile) => {
      if (mobile.id === id) {
        return { ...mobile, quantity };
      } else {
        return mobile;
      }
    });

    setTotalPrice(calculateTotalPrice(updatedMobiles));
    setTotalQuantity(calculateTotalQuantity(updatedMobiles));
    setMobiles(updatedMobiles);
  }

  function handleRemoveMobile(id) {
    const updatedMobiles = mobilesState.filter((mobile) => mobile.id !== id);
    setTotalPrice(calculateTotalPrice(updatedMobiles));
    setTotalQuantity(calculateTotalQuantity(updatedMobiles));
    setMobiles(updatedMobiles);
    removeMobile(id);
  }

  function handleRemoveMobileBy0(id) {
    const updatedMobiles = mobilesState.filter((mobile) => mobile.id !== id);
    setTotalPrice(calculateTotalPrice(updatedMobiles));
    setTotalQuantity(calculateTotalQuantity(updatedMobiles));
    setMobiles(updatedMobiles);
    removeMobileBy0(id);
  }

  function handleClearCart() {
    setMobiles([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  }

  return (
    <section>
        <div className="bag-icon">
      <FontAwesomeIcon icon={faShoppingBag} size="2x" />
      <div className="bubble">{totalQuantity}</div>
    </div>
      <p className="cart-App">Cart App</p>
      <h1 className="bag">YOUR BAG</h1>
      {mobilesState.length === 0 ? (

        <p className="empty">Your cart is currently empty</p>
      ) : (
        <div className="container">
          {mobilesState.map((mobile) => (
            <Mobile
              key={mobile.id} image={mobile.image} 
              {...mobile}
              removeMobile={handleRemoveMobile}
              removeMobileBy0={handleRemoveMobileBy0}
              onQuantityChange={handleQuantityChange}
            />
          ))}
               <div className="pink-line-container">
      <div className="pink-line"></div>
    </div>
          <p className="total-price">${totalPrice}</p>
          <div className="total">Total</div>
          <button className="clear-cart" onClick={handleClearCart}>CLEAR CART</button>
        </div>
    
      )}
    </section>
  );
};

export default Mobiles;
