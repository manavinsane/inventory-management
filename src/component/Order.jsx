// OrderForm.js

import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [order, setOrder] = useState({
    productId: '',
    quantity: 0
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setOrder(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post('/api/orders', order);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order. Please try again.');
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="text"
            name="productId"
            value={order.productId}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={order.quantity}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
