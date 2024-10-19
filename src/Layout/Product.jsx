import {React, useState, useEffect} from 'react'

const Product = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProducts(json))
  }, [])

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
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.category}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Product