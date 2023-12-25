import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Ecommerce store</h1>
        <button className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded'>
          Shopping cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
