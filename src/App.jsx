import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Layout/Product';
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;