import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Layout/Product';


const App = () => {
 return (
  <Router>
    <Routes>
      <Route path="/" element={<Product />} />
    </Routes>
  </Router>
 )
}

export default App;
