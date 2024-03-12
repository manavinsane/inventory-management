import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/inventory');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              Product Name: {product.productName}, Quantity: {product.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
