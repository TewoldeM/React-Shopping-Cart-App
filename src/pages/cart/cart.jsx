import React, { useContext } from 'react';
import { PRODUCTS } from '../../productss';
import { Shopcontext } from '../../context/shop-context';
import { CartItem } from './cart-item'; // Use the correct  case for component name
import "./cart.css";
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
  const { cartItems ,getTotalCratAmount} = useContext(Shopcontext);
  const totalAmount =getTotalCratAmount()
  const navigate =useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
       
        })}
      </div>
      {totalAmount > 0 ? (
  <div className='checkout'>
    <p>Subtotal: ${totalAmount}</p>
    <button onClick={() => navigate('/')}>Continue shopping</button>
    <button>Checkout</button>
  </div>
) : (
  <div>
    <h1 className='empty'>Your cart is Empty</h1>
    <div>
      <button className='additional-button' onClick={() => navigate('/')}>Back to Shop</button>
    </div>
  </div>
)}
    </div>

  );
};