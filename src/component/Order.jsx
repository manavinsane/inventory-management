// Order.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [order, setOrder] = useState({
    id: 0,
    quantity: 0
  });

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value)
    setOrder(prevState => ({
      ...prevState,
      [name]: parseInt(value,10) || 0
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("React: ", order);
    try {
      const response = await axios.post('http://localhost:8080/api/order/place', order); // Adjust URL according to your backend server
      if(response.status == 200){
        console.log(response.data)
        if(response.data == "Insuffient stock"){
          alert(response.data)
        } else if(response.data == "not found"){
          alert("product not found");
        }else{
          alert("order placed successfully");
        }
      }
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
            type="number"
            name="id"
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

export default Order;
