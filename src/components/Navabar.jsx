import React, { useContext, useState } from 'react';
import { Modal, Button, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { Cartcontext } from '../Cartcontext';
const Navbarbar = ({product}) => {
  const [show, setShow] = useState(false);
  const Cart = useContext(Cartcontext) ;
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
 const productCount = Cart.items.reduce((sum,product)=>sum+product.quantity,0)
  return (
    <>
      <Navbar className='bg-gray-800 p-4 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Ecommerce store</h1>
          <Link to = '/cart'
            onClick={handleShow}
            className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded'
          >
            Shopping cart ({productCount})
          </Link>
          
        </div>
      </Navbar>
    </>
  );
};

export default Navbarbar;
