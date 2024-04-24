import React, { useContext } from 'react';
import { Shopcontext } from '../../context/shop-context';

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(Shopcontext);
  
  return (
    <div className='CartItem'>
      <img src={productImage} alt='product Name' />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className='counthandler'>
          <button onClick={()=>{removeFromCart(id)}}>-</button>
          <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
          <button onClick={()=>{addToCart(id)}}>+</button>
        </div>
      </div>
    </div>
  );
};