import React, { useState } from "react";
import "./devices.css";

const Mobile = ({ id, name,price,image, quantity, removeMobile,  onQuantityChange }) => {
  const [counter, setCounter] = useState(Number(quantity));

  const incrementCounter = () => {
    setCounter(Number(counter) + 1);
    onQuantityChange(id, Number(counter) + 1);

  };

  const decrementCounter = () => {
    setCounter(counter - 1);
    onQuantityChange(id, Number(counter) - 1);

  };

  if (counter === 0) {
    removeMobile(id);

  }

  return (
    <article className="product">
          <img src={image} alt= {name}></img>
        <div className="info">
          <div className="name">{name}</div>
          <div className="price">${price}</div>
        <button className="delete" onClick={() => removeMobile(id)}>Remove</button>
          </div>
          <div className="counter">
          <button className="increase" onClick={() =>incrementCounter()}> &#x2191; </button>
          <p>{counter} </p>
          <button  className="decrease" onClick={() =>decrementCounter()}> &#x2193; </button>
        </div>
    </article>
  );
};

export default Mobile;
