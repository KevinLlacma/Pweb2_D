import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>My Shop</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/create" element={<CreateProduct />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
