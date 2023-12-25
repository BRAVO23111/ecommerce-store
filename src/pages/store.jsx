import React from 'react';
import Product from '../components/Product'; // Assuming the correct path to the Product component

const Store = () => {
  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-3xl font-semibold mb-4'>Welcome to the Store</h1>
      <Product />
    </div>
  );
}

export default Store;
