import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../productss';
import { CartItem } from '../pages/cart/cart-item';

export const Shopcontext = createContext(null);

const getDefaultCart = () => {
  let Cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    Cart[i] = 0;
  }
  return Cart;
};

export const ShopcontextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
const getTotalCratAmount=()=>{
  let totalAmount=0;
  for(const item in cartItems){
    if(cartItems[item] >0){
      let itemInfo=PRODUCTS.find((product)=>product.id===Number(item))
      totalAmount+=cartItems[item]*itemInfo.price 
    }
  }
  return totalAmount;
}
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
const updateCartItemCount=(newAmount, itemId)=>{
  setCartItems((prev)=>({...prev, [itemId]:newAmount}))
  //setCartItems is called to update the cartItems state.
  // The existing cartItems state is spread using the spread operator (...prev), creating a new object that retains all the existing key-value pairs.
}


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCratAmount,
  };

  console.log(cartItems);

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
}