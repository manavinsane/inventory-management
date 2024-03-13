import React, { useState } from 'react';

const InventoryManagement = () => {
  const [inventoryItem, setInventoryItem] = useState({
    productName: '',
    quantity: 0
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setInventoryItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addInventoryItem = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inventoryItem),
      });
      if (!response.ok) {
        throw new Error('Failed to add inventory item');
      }
      console.log(response);
      console.log('Inventory item added successfully');
    } catch (error) {
      console.error('Error adding inventory item:', error.message);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addInventoryItem();
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={inventoryItem.productName}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={inventoryItem.quantity}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Inventory Item</button>
      </form>
    </div>
  );
};

export default InventoryManagement;
