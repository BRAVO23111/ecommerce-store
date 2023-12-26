import React from 'react';
import Product from '../components/Product';
import { productarray } from '../productsarray';

const Store = () => {
  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-3xl font-semibold mb-4 text-center'>Welcome to the Store</h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap">
          {productarray.map((product, idx) => (
            <div key={idx} className="m-4">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
