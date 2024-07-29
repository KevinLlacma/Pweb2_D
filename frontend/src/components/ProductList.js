import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://tiendaonline-9c83954f4ca8.herokuapp.com/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default ProductList;
