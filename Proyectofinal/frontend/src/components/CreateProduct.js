import React, { useState } from 'react';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('/api/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setSuccess(true);
      setName('');
      setPrice('');
    })
    .catch(error => {
      console.error('Hubo un problema con la operacion fetch :', error);
      setError(error);
    });
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <br />
        <label>
          Price:
          <input 
            type="number" 
            step="0.01" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {success && <p>Producto creado con exito</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default CreateProduct;
