import React, { useState, useEffect } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <section className='w-full bg-slate-700 p-7'>
      <h1 className='text-white text-4xl text-center'>Products</h1>
      <div className='flex gap-4 pt-4'>
        {products.map(product => (
          <div key={product.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img 
                  className="w-full h-64 object-cover rounded-t-lg" 
                  src={product.image} 
                  alt={product.title} 
                  onError={(e) => {e.target.src = 'https://via.placeholder.com/150';}} // Fallback image
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;