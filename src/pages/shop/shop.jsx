import React from 'react'
import { Product } from "./product";
import { PRODUCTS } from '../../productss';
import "./shop.css" 
// Rest of your code
export const Shop = () => {
  return (
    <div className='shop'>
  <div className='shoptitle'>
    <h1>አዲስ ገብያ</h1>
  </div>
  <div className='products'>
  {PRODUCTS.map((product)=>( 
     <Product data={product}/> 
  )
  )}
  </div>
    </div>
  )
}


